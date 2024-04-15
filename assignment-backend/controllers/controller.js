const User = require("../models/userModel");

// Dashboard section - welcome page after signin/login -> "/dashboard"
const dashboard = async (req, res) => {
  try {
    res.status(200).send("Success!!");
  } catch (error) {
    console.log(error);
  }
};

// Signup page section - create employee page -> "/create"
const signup = async (req, res) => {
  try {
    // console.log(req.body);

    const { name, email, mobile, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "User already exists !!" });
    }

    const userCreated = await User.create({
      name,
      email,
      mobile,
      password,
    });

    res.status(201).json({
      msg: "Registration Successful !!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "Controller Error !!" });
  }
};

// Signin page section - home/login -> first entry "/"
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ msg: "User Not Exists !!" });
    }

    // Comparing password
    const userPwdValid = await userExist.comparePassword(password);

    if (userPwdValid) {
      res.status(200).json({
        msg: "Signin Successful !!",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Wrong Credentials !!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Controller Error !!" });
  }
};

module.exports = { dashboard, signup, signin };
