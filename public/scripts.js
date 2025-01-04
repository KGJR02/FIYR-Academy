document.addEventListener("DOMContentLoaded", () => {
    console.log("FIYR Academy is live!");
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsioqqEHDnneX4ULeevST6mO1NYWxhh-I",
  authDomain: "fiyr-academy.firebaseapp.com",
  projectId: "fiyr-academy",
  storageBucket: "fiyr-academy.appspot.com",
  messagingSenderId: "1082192041153",
  appId: "1:1082192041153:web:9de39c9799fc173e2f7040",
  measurementId: "G-GQF03FYF45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Fetch Blogs
async function fetchBlogs() {
    const blogsCollection = collection(db, "blogs");
    const snapshot = await getDocs(blogsCollection);
    snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
    });
}

// Fetch Courses
async function fetchCourses() {
    const coursesCollection = collection(db, "courses");
    const snapshot = await getDocs(coursesCollection);
    snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
    });
}

// Call the functions
fetchBlogs();
fetchCourses();
