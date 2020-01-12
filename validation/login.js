const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.confirm_email = !isEmpty(data.confirm_email) ? data.confirm_email : '';
  data.phone_no = !isEmpty(data.phone_no) ? data.phone_no : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname field is required';
  }

  if (Validator.isEmpty(data.phone_no)) {
    errors.phone_no = 'Phone_no is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.confirm_email)) {
    errors.confirm_email = "Confirm email field is required";
  }

  if (!Validator.equals(data.email, data.confirm_email)) {
    errors.confirm_email = "Email must match";
  }

  if (!Validator.isLength(data.phone_no, { min: 1, max: 10 })) {
    errors.phone_no = 'Phone number limits exceed(max:10)';
  }
  if (!Validator.isNumeric(data.phone_no, { no_symbols: true })) {
    errors.phone_no = "Enter a phone_no in a correct format";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
