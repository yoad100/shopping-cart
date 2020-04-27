import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/358214/christmas_gift_present_toy_train_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img className="logo" src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              חנות
            </Link>
          </li>
        </ul>
        <Link to="/" className="mx-auto"> 
        <div className="siteName ">
        <h1 >Yigal-Store</h1>
        </div>
        </Link>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainWhite);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  .nav-link {
    &: hover {
         background: var(--mainWhite);
         box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
       }
    color: var(--mainDark) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
const logo = 'data:image/png;base64,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'
