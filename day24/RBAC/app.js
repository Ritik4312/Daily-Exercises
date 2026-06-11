const express = require('express');
const port = 3000;
const app = express();
const userRoutes = require('./routes/userRoutes');
const rateLimiter = require("express-rate-limit");
const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// Middleware to parse JSON bodies
app.use(express.json());
// Use user routes
app.use('/api', userRoutes);    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


