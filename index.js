const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Import dotenv and load .env variables

const app = express();
const port = process.env.PORT || 5000;

// console.log(process.env.PORT, "check!");
// console.log(process.env.MONGODB_URL)
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
//
//
// ;

const authRoutes = require("./routes/userRouter");
app.use("/", authRoutes);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process if connection fails
  }
};

connectDB(); // Now calling it after defining

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kerosence!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
