const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  logoutUser,
  getusers,
  deleteUser,
} = require("../controller/user");

router.post("/register", createUser);
router.get("/getusers", getusers);
router.delete("/deleteuser/:id", deleteUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);

module.exports = router;
