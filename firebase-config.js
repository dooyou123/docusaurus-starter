import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCpnGPH0Q4o6Flqqj-jYUb_2BDEW7oM7yI",
  authDomain: "docusaur-9c466.firebaseapp.com",
  projectId: "docusaur-9c466",
  // ... 기타 필요한 정보들
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
