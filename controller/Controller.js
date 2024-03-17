const Moonshine = require("../model/model");

const Signup = async (req, res) => {
    try {
        // Destructure request body with correct field names
        const {name, email,password} = req.body;
    console.log(req.body)

        // Create a new document with Mongoose
        const moonshine = await Moonshine.userModel.create({
            firstname:name,
            userEmail:email,
            userPassword:password
        });

        console.log(moonshine);
        res.status(201).json(moonshine);
    } catch (err) {
        // Handle validation errors separately
        if (err.name === 'ValidationError') {
            res.status(400).json({ message: err.message });
        } else {
            // Log other errors
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

module.exports = { Signup };
