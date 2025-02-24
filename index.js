const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Import dotenv and load .env variables
const cors = require("cors");
const app = express();

// console.log(process.env.PORT, "check!");
// console.log(process.env.MONGODB_URL)
//
app.use(express.json());
//
//
//
//
//
//
//
//
//
//
//
// ;
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
  res.send("Kerosence!");
});
