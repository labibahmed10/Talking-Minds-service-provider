// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Fg58BPtBzpXCvWxGf-dpp_mjXWcp-QA",
  authDomain: "talkingminds-d1263.firebaseapp.com",
  projectId: "talkingminds-d1263",
  storageBucket: "talkingminds-d1263.appspot.com",
  messagingSenderId: "61242155325",
  appId: "1:61242155325:web:11ffaf58f18366d6cca554",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
