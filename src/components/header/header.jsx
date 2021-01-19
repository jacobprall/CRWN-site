import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/Contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/login">SIGN IN</OptionLink>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </OptionsContainer>
    </HeaderContainer>
  );
}

const mSTP = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mSTP)(Header);
