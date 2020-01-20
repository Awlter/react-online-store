import React from "react";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <h1>I already have an account</h1>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;