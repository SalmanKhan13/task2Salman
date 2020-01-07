import React, { Component } from 'react';
import axios from "axios";
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
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    };

    console.log(user);
    axios
      .post('/api/users', user, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(res => {

        console.log("Your form has submitted bro");
      })
      .catch(err => console.log(err));

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User Form</h1>
              <p className="lead text-center">
                creativeMorph  Require User Form
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="firstname"
                    className="form-control form-control-lg"
                    placeholder="First_name"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
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
                    className="form-control form-control-lg"
                    placeholder="phone_no"
                    name="phone_no"
                    value={this.state.phone_no}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="confirm_email"
                    className="form-control form-control-lg"
                    placeholder="confirm_Email Address"
                    name="confirm_email"
                    value={this.state.confirm_email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="address"
                    className="form-control form-control-lg"
                    placeholder="address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="gender"
                    className="form-control form-control-lg"
                    placeholder="gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
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
