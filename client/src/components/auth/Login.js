import React, { Component } from 'react';
import axios from "axios";
import classnames from 'classnames';
import Recaptcha from 'react-recaptcha';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      confirm_email: '',
      phone_no: '',
      address: '',
      gender: '',
      text_area: '',
      isVerified: false,
      errors: {}

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  recaptchaLoaded() {
    console.log('captcha successfully loaded');
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      confirm_email: this.state.confirm_email,
      phone_no: this.state.phone_no,
      address: this.state.address,
      gender: this.state.gender,
      text_area: this.state.text_area
    };
    if (this.state.isVerified) {
      console.log('You have verified as a human(bro)!');
    } else {
      alert('Please verify that you are a human!');
    }
    console.log(user);
    axios
      .post('/api/users', user)
      .then(res => {
        this.props.history.push('/welcomePage');
        //console.log("Your form has submitted bro");
      })
      .catch(err => this.setState({ errors: err.response.data }));

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors, captcha } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User Form</h1>
              <p className="lead text-center">
                creativeMorph Require User Form
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="firstname"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.firstname
                    })}
                    placeholder="First_name"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
                  {errors.firstname && (
                    <div className="invalid-feedback">{errors.firstname}</div>
                  )}

                </div>
                <div className="form-group">
                  <input
                    type="lastname"
                    className="form-control form-control-lg"
                    placeholder="Last_name"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />

                </div>
                <div className="form-group">
                  <input
                    type="phone_no"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.phone_no
                    })}
                    placeholder="phone_no"
                    name="phone_no"
                    value={this.state.phone_no}
                    onChange={this.onChange}
                  />
                  {errors.phone_no && (
                    <div className="invalid-feedback">{errors.phone_no}</div>
                  )}

                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="confirm_email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirm_email
                    })}
                    placeholder="Confirm_Email Address"
                    name="confirm_email"
                    value={this.state.confirm_email}
                    onChange={this.onChange}
                  />
                  {errors.confirm_email && (
                    <div className="invalid-feedback">{errors.confirm_email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="address"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="gender"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.gender
                    })}
                    placeholder="Gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
                  />
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                  )}
                </div>
                <div className="form-group">

                  <textarea
                    type="text_area"
                    className="form-control form-control-lg"
                    placeholder="Detailed Queries"
                    value={this.state.text_area}
                    name="text_area"
                    onChange={this.onChange} />

                </div>
                <div className="form-group">
                  <Recaptcha
                    name="captcha"
                    sitekey="6LfUkc4UAAAAABbUuqpjDtIvCdEJebCtfCRySBhw"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}
                  />

                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
