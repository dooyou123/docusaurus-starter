import React, { useState } from "react";
import firebase from "../../firebase-config";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      // 특정한 데이터로 로그인을 허용하는 조건을 설정합니다.
      if (email === "deespan@gmail.com" && password === "kang20660562@") {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // 성공적으로 로그인되었으므로 리다이렉트 등의 작업 수행
        window.location.href = "/login";
      } else {
        setErrorMessage("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">로그인 페이지</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            이메일
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
