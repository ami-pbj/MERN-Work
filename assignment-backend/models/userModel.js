const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create Table
// t_login
// f_sno,f_userName,f_Pwd

// t_Employee;
// f_Id,f_Image,f_Name,f_Email,f_Mobile,f_Designation,f_gender,f_Course,f_Createdate;

const userSchema = new mongoose.Schema({
  // f_Id: { type: Number, required: true },
  // f_Name: { type: String, required: true },
  // f_Email: { type: String, required: true, unique: true },
  // f_Mobile: { type: Number, required: true },
  // f_Designation: { type: String, required: true },
  // f_Course: { type: String, required: true },
  // f_Gender: { type: String, required: true },
  // f_Image: { type: String, required: true },
  // f_Createdate: { type: Number, required: true },

  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  password: { type: String, required: true },
});

// Pre method to identify the password and apply hashing to password
userSchema.pre("save", async function (next) {
  console.log("pre method output", this);

  const userData = this;

  if (!userData.isModified("password")) {
    next();
  }

  try {
    // salting (complexing the db password) and hashing the password using bcrypt
    const saltPwd = await bcrypt.genSalt(10);

    const hashPwd = await bcrypt.hash(userData.password, saltPwd);

    userData.password = hashPwd;
  } catch (error) {
    next(error);
  }
});

// Compare Password using bcrypt.compare
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// JWT - json web token -> for authentication and authorization
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.error(error);
  }
};

// defining the model or collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
