import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="NavStyle">
  
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              חנות
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
             אודותינו
            </Link>
          </li>
        </ul>
        
        
        <Link to="/" > 
        <div >
        <img className="siteLogo" src="https://document-export.canva.com/DAD6u5dmh0U/49/thumbnail/0001-6282546788.png"></img>
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
         border:2px outset black;
         padding:7px;
         border-radius:2rem;
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

