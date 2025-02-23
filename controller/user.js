const User = require("../models/userSchema.js");

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).send({
        message: "User created successfully",
        user,
      });
    } catch (error) {
      res.status(400).send({
        message: "error creating user",
        error,
      });
    }
  };
  module.exports = { createUser };