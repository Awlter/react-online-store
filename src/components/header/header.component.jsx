import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <Link className="logo" to="/">
        <Logo />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="shop">
        Shop
      </Link>
      <Link className="option" to="contacts">
        Contacts
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="signin">
          Signin
        </Link>
      )}
    </div>
  </div>
);

export default Header;
