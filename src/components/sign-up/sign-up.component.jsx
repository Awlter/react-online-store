import React from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  state = {
    email: "",
    displayName: "",
    password: "",
    passwordConfirm: ""
  };

  handleChange = event => {
    const $target = event.currentTarget;
    this.setState({
      [$target.name]: $target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, displayName, password, passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      alert("Password confirmation is different from password");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign Up with Email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            label="Display Name"
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="passwordConfirm"
            type="password"
            value={this.state.passwordConfirm}
            label="Password Confirm"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
