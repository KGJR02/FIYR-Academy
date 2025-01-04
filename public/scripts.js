document.addEventListener("DOMContentLoaded", () => {
    console.log("FIYR Academy is live!");

    // Fetch and display blogs
    function fetchBlogs() {
        fetch('/api/blogs') // Adjusted path for future backend support
            .then(response => response.json())
            .then(data => {
                const blogsList = document.getElementById('blogs-list');
                blogsList.innerHTML = '';
                data.forEach(blog => {
                    const blogItem = document.createElement('div');
                    blogItem.className = 'blog-item';
                    blogItem.innerHTML = `
                        <h3>${blog.title}</h3>
                        <p>${blog.content}</p>
                    `;
                    blogsList.appendChild(blogItem);
                });
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }

    // Fetch and display courses
    function fetchCourses() {
        fetch('/api/courses') // Adjusted path for future backend support
            .then(response => response.json())
            .then(data => {
                const coursesList = document.getElementById('courses-list');
                coursesList.innerHTML = '';
                data.forEach(course => {
                    const courseItem = document.createElement('div');
                    courseItem.className = 'course-item';
                    courseItem.innerHTML = `
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                    `;
                    coursesList.appendChild(courseItem);
                });
            })
            .catch(error => console.error('Error fetching courses:', error));
    }

    // Call fetch functions if respective elements are present
    if (document.getElementById('blogs-list')) fetchBlogs();
    if (document.getElementById('courses-list')) fetchCourses();
});
