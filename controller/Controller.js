const Moonshine = require("../model/model").userModel;

const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const moonshine = await Moonshine.create({
      firstname: name,
      userEmail: email,
      userPassword: password,
    });
    console.log(moonshine);
    res.status(201).json(moonshine);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ message: err.message });
    } else {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

module.exports = { Signup };