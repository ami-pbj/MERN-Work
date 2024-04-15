const home = async (req, res) => {
  try {
    res.status(200).send("Success!!");
  } catch (error) {
    console.log(error);
  }
}


// Signup page section

const signup = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({msg: req.body});
  } catch (error) {
    res.status(400).json({msg: "Error !! Page not Found !!"})
  }
}



module.exports = { home, signup };