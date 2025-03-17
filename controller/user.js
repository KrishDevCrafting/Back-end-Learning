const User = require("../models/userSchema.js");

const createUser = async (req, res) => {
  const { name, email, password, gender } = req.body;
  try {
    const user = new User({ name, email, password, gender });
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
const getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
module.exports = { createUser, getusers, deleteUser };
