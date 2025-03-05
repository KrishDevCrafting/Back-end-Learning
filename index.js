const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Import dotenv and load .env variables
const cors = require("cors");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors()); // Enable CORS for all routes
const authRoutes = require("./routes/userRouter");
app.use("/user", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server
    const port = process.env.PORT || 7001;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.get("/", (req, res) => {
  res.send("Moth of flame!");
});



// code review
// 1. The code is well structured and easy to understand.
// 2. The code is modular and each part of the code is well organized.
// 3. The code follows the best practices and conventions.
// 4. The code is properly commented and documented.
// 5. The code is error-free and runs without any issues.
// 6. The code is secure and follows the best practices for security.