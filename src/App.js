import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signin">
          <SignInSignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
