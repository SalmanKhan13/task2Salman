const express = require("express");
const router = express.Router();
const config = require("config");
const validateRegisterInput = require('../../validation/login');
const User = require("../../models/User");

router.get('/', (req, res) => {
  res.send("checking for routes");
})


// @route   GET api/users/
// @desc    Submit User /
// @access  Public
router.post('/', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const email = req.body.email;
  const phone_no = req.body.phone_no;
  const confirm_emails = req.body.confirm_email;
  const address = req.body.address;
  const gender = req.body.gender;
  const newUser = new User({
    firstname: fname,
    lastname: lname,
    phone_no: phone_no,
    email: email,
    confirm_email: confirm_emails,
    address: address,
    gender: gender
  });
  console.log(newUser);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));

});


module.exports = router;