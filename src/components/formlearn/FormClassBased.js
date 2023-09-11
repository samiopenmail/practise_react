import React, { Component } from 'react';

class FormClassBased extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.email, this.state.password);
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              onChange={this.handleName}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>
          <div>
            <label>Submit:</label>
            <input type='submit' name='submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default FormClassBased;
