const mongoose = require("mongoose");

// Create Table
// t_login
// f_sno,f_userName,f_Pwd

// t_Employee;
// f_Id,f_Image,f_Name,f_Email,f_Mobile,f_Designation,f_gender,f_Course,f_Createdate;

const employeeSchema = new mongoose.Schema({
  // f_Id: { type: Number, required: true },
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true, unique: true },
  f_Mobile: { type: Number, required: true },
  f_Designation: { type: String, required: true },
  f_Course: { type: String, required: true },
  f_Gender: { type: String, required: true },
  // f_Image: { type: String, required: true },
  // f_Createdate: { type: Number, required: true },
});

const employees = new mongoose.model("employees", employeeSchema);

module.exports = employees;
