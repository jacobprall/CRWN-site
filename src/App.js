import "./pages/homepage/homepage.scss";
import HomePage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.jsx";
import LoginContainer from "./pages/login/login-container.jsx";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </div>
  );
}

export default App;
