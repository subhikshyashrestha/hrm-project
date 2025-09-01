// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider}  from "firebase/auth"
import { GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASd-OKsT-9Ji9ERUMXom7H0HKdMcMYKcQ",
  authDomain: "hrm-project-50390.firebaseapp.com",
  projectId: "hrm-project-50390",
  storageBucket: "hrm-project-50390.firebasestorage.app",
  messagingSenderId: "978333080268",
  appId: "1:978333080268:web:73561a36c09b2f01b74069",
  measurementId: "G-B5KWZBG6PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth)
 export const googleAuth = new GoogleAuthProvider()
 export const provider = new GithubAuthProvider();
