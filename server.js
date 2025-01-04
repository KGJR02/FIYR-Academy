const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // Serve static files
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
app.get('*', (req, res) => {
    res.send('Route not found or file structure issue');
});
