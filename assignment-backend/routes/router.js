const express = require("express");
const router = express.Router();
const employees = require("../models/employee");
const cors = require("cors");
const controllers = require("../controllers/controller");


router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.get("/", cors(), (req, res) => {
//   res.status(200).send("Success!!");
// });

router.route("/").get(controllers.home);

router.route("/create").post(controllers.signup);

// router.post("/create", async (req, res) => {
//   const { name, email, mobile, designation, gender, course, password } =
//     req.body;

//   console.log(req.body);

//   // const { f_Name, f_Email, f_Mobile, f_Designation, f_Course, f_Gender } = req.body;
//   // if (
//   //   !f_Name ||
//   //   !f_Email ||
//   //   !f_Mobile ||
//   //   !f_Designation ||
//   //   !f_Course ||
//   //   !f_Gender
//   // ) {
//   //   res.status(422).json("Fill All the Data !!");
//   // }

//   // try {
//   //   const preuser = await users.findOne({ f_Email: f_Email });
//   //   console.log(preuser);

//   //   if (preuser) {
//   //     res.status(422).json("User Exists !!");
//   //   } else {
//   //     const adduser = new users({
//   //       f_Name,
//   //       f_Email,
//   //       f_Mobile,
//   //       f_Designation,
//   //       f_Course,
//   //       f_Gender,
//   //     });

//   //     await adduser.save();
//   //     res.status(201).json(adduser);
//   //     console.log(adduser);
//   //   }
//   // } catch (error) {
//   //   res.status(422).json(error);
//   // }

//   const data = {
//     name: name,
//     email: email,
//     mobile: mobile,
//     // designation: designation,
//     // gender: gender,
//     // course: course,
//     password: password,
//   };

//   try {
//     const check = await collection.findOne({ email: email });

//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("not exist");
//       await collection.insertMany([data]);
//     }
//   } catch (e) {
//     res.json("getting error - signup");
//   }
// });

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
