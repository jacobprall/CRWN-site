import "./pages/homepage/homepage.scss";
import HomePage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.jsx";
import LoginContainer from "./pages/login/login-container.jsx";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React, { useState, useEffect } from "react";

function App() {
  let [currentUser, setCurrentUser] = useState({ currentUser: null });

  // function returns an unsubscribe function, passing to return as clean up callback
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else setCurrentUser({ currentUser: userAuth });
    });
  }, []);
  console.log(currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </div>
  );
}

export default App;
