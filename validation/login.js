const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.phone_no = !isEmpty(data.phone_no) ? data.phone_no : '';

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname field is required';
  }

  if (Validator.isEmpty(data.phone_no)) {
    errors.phone_no = 'Phone_no is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }


  // if (Validator.isMobilePhone(data.phone_no, locale = "any", { min: 0, max: 10 })) {
  //   errors.phone_no = 'Phone_no is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
