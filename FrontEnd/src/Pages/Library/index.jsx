import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import CardHandler from '../../services/CardHandler';

const required = value => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};


export default class Library extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

    this.state = {
      name: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      successful: false,
      message: ''
    };
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
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

    CardHandler.postCard(
        this.state.name,
        this.state.companyName,
        this.state.email,
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
        <>
          <div className="col-md-12">
            <div className="card card-container">
              <Form
                  onSubmit={ this.handleRegister }
                  ref={ c => {
                    this.form = c;
                  } }
              >
                { !this.state.successful && (
                    <div>
                      <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="name"
                            value={ this.state.name }
                            onChange={ this.onChangeName }
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="companyName">Company name</label>
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
                            validations={ [required] }
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
                        <button className="btn btn-primary btn-block">Ajouter</button>
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
        </>
    );
  }
}