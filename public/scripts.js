document.addEventListener("DOMContentLoaded", () => {
  console.log("FIYR Academy is live!");
});

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration
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
const db = getFirestore(app);

// Fetch Blogs
async function fetchBlogs() {
  const blogsCol = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCol);
  const blogs = blogSnapshot.docs.map(doc => doc.data());
  console.log("Blogs:", blogs);
}

// Fetch Courses
async function fetchCourses() {
  const coursesCol = collection(db, "courses");
  const courseSnapshot = await getDocs(coursesCol);
  const courses = courseSnapshot.docs.map(doc => doc.data());
  console.log("Courses:", courses);
}

fetchBlogs();
fetchCourses();
