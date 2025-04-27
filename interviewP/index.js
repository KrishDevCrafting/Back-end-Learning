const mongoose = required("mongoose");
mongoose
  .connect("", {
    userNewUrlParser: true,
    userUnifiedTopology: true,
  })

  .then(() => console.log("mongooseDb connected"))
  .catch((err) => console.log(err));

const mongoose = require("mongoose");
