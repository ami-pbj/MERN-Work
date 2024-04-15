const express = require("express");
const router = express.Router();
const cors = require("cors");
const controllers = require("../controllers/controller");


router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.get("/", cors(), (req, res) => {
//   res.status(200).send("Success!!");
// });


router.route("/").post(controllers.signin);
router.route("/create").post(controllers.signup);
router.route("/dashboard").get(controllers.dashboard);


module.exports = router;
