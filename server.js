const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
// Get all blogs
app.get('/api/blogs', (req, res) => {
  res.json([
    { id: 1, title: "First Blog", content: "This is the first blog." },
    { id: 2, title: "Second Blog", content: "This is the second blog." }
  ]);
});

// Get a specific blog by ID
app.get('/api/blogs/:id', (req, res) => {
  const blogs = [
    { id: 1, title: "First Blog", content: "This is the first blog." },
    { id: 2, title: "Second Blog", content: "This is the second blog." }
  ];
  const blog = blogs.find(b => b.id == req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).send('Blog not found');
  }
});

// Get all courses
app.get('/api/courses', (req, res) => {
  res.json([
    { id: 1, title: "Course 1", description: "Intro to Programming" },
    { id: 2, title: "Course 2", description: "Advanced Web Development" }
  ]);
});

// Get a specific course by ID
app.get('/api/courses/:id', (req, res) => {
  const courses = [
    { id: 1, title: "Course 1", description: "Intro to Programming" },
    { id: 2, title: "Course 2", description: "Advanced Web Development" }
  ];
  const course = courses.find(c => c.id == req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).send('Course not found');
  }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
