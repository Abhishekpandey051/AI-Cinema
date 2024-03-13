// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcaJ8K7DQfWnTBRL4LwrdFa1d3lH_NjxU",
  authDomain: "netflixgpt-77555.firebaseapp.com",
  projectId: "netflixgpt-77555",
  storageBucket: "netflixgpt-77555.appspot.com",
  messagingSenderId: "588483942514",
  appId: "1:588483942514:web:56f1a90a5e6fd45b770aeb",
  measurementId: "G-MR6XPP1ERY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);