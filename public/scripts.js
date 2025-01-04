document.addEventListener("DOMContentLoaded", () => {
    console.log("FIYR Academy is live!");

    fetchBlogs();
    fetchCourses();
});

// Import Firebase SDK and Firestore
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);

// Fetch and display blogs
async function fetchBlogs() {
    const blogsList = document.getElementById("blogs-list");
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
        const blog = doc.data();
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
        blogsList.appendChild(listItem);
    });
}

// Fetch and display courses
async function fetchCourses() {
    const coursesList = document.getElementById("courses-list");
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
        const course = doc.data();
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
        coursesList.appendChild(listItem);
    });
}
