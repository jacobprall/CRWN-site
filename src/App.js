import "./pages/homepage/homepage.scss";
import HomePage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from './pages/checkout/checkout-page'
import Header from "./components/header/header.jsx";
import LoginContainer from "./pages/login/login-container.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

function App(props) {

  // function returns an unsubscribe function, passing to return as clean up callback
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else props.setCurrentUser(userAuth);
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/login" render={() => props.currentUser ? (<Redirect to="/" />) : <LoginContainer />} />
      </Switch>
    </div>
  );
}

const mDTP = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mSTP = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mSTP, mDTP)(App);
