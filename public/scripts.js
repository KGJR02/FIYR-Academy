document.addEventListener("DOMContentLoaded", () => {
    console.log("FIYR Academy is live!");
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsioqqEHDnneX4ULeevST6mO1NYWxhh-I",
  authDomain: "fiyr-academy.firebaseapp.com",
  projectId: "fiyr-academy",
  storageBucket: "fiyr-academy.firebasestorage.app",
  messagingSenderId: "1082192041153",
  appId: "1:1082192041153:web:9de39c9799fc173e2f7040",
  measurementId: "G-GQF03FYF45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
