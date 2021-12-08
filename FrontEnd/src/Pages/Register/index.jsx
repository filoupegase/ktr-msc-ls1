import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../../services/auth.service';

const required = value => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

    this.state = {
      username: '',
      companyName: '',
      email: '',
      password: '',
      phoneNumber: '',
      successful: false,
      message: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeCompanyName(e) {
    this.setState({
      companyName: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: '',
      successful: false
    });

    this.form.validateAll();

    AuthService.register(
        this.state.username,
        this.state.companyName,
        this.state.email,
        this.state.password,
        this.state.phoneNumber
    ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
    );
  }

  render() {
    return (
        <div className="col-md-12">
          <div className="card card-container">
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
            />
            <Form
                onSubmit={ this.handleRegister }
                ref={ c => {
                  this.form = c;
                } }
            >
              { !this.state.successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">UserName</label>
                      <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={ this.state.username }
                          onChange={ this.onChangeUsername }
                          validations={ [required] }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="companyName">Company Name</label>
                      <Input
                          type="text"
                          className="form-control"
                          name="companyName"
                          value={ this.state.companyName }
                          onChange={ this.onChangeCompanyName }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Input
                          type="text"
                          className="form-control"
                          name="email"
                          value={ this.state.email }
                          onChange={ this.onChangeEmail }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={ this.state.password }
                          onChange={ this.onChangePassword }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Input
                          type="number"
                          className="form-control"
                          name="phoneNumber"
                          value={ this.state.phoneNumber }
                          onChange={ this.onChangePhoneNumber }
                      />
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>
              ) }

              { this.state.message && (
                  <div className="form-group">
                    <div
                        className={
                          this.state.successful
                              ? 'alert alert-success'
                              : 'alert alert-danger'
                        }
                        role="alert"
                    >
                      { this.state.message }
                    </div>
                  </div>
              ) }
              <CheckButton
                  style={ { display: 'none' } }
                  ref={ c => {
                    this.checkBtn = c;
                  } }
              />
            </Form>
          </div>
        </div>
    );
  }
}

