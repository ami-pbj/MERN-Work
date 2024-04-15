const express = require('express');
const router = express.Router();
const employees = require('../models/employee');

// registering user

router.post("/signup", async (req, res) => {
  console.log(req.body);
  // const { f_Name, f_Email, f_Mobile, f_Designation, f_Course, f_Gender } = req.body;

  // if (
  //   !f_Name ||
  //   !f_Email ||
  //   !f_Mobile ||
  //   !f_Designation ||
  //   !f_Course ||
  //   !f_Gender 
  // ) {
  //   res.status(422).json("Fill All the Data !!");
  // }

  // try {
  //   const preuser = await users.findOne({ f_Email: f_Email });
  //   console.log(preuser);

  //   if (preuser) {
  //     res.status(422).json("User Exists !!");
  //   } else {
  //     const adduser = new users({
  //       f_Name,
  //       f_Email,
  //       f_Mobile,
  //       f_Designation,
  //       f_Course,
  //       f_Gender,
  //     });

  //     await adduser.save();
  //     res.status(201).json(adduser);
  //     console.log(adduser);
  //   }
  // } catch (error) {
  //   res.status(422).json(error);
  // }
});

// get userdata

// router.get("/getdata", async (req, res) => {
//   try {
//     const userdata = await users.find();
//     res.status(201).json(userdata);
//     console.log(userdata);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });

// // get individual user

// router.get("/getuser/:id", async (req, res) => {
//   try {
//     console.log(req.params);
//     const { id } = req.params;

//     const userindividual = await users.findById({ _id: id });
//     console.log(userindividual);
//     res.status(201).json(userindividual);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });



 

module.exports = router;