import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
  
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-4">
            <Link to="/" className="nav-link">
            <span style={{fontFamily:'nos',paddingLeft:'0.8vw',color:'var(--mainBlue)'}}>חנות</span>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-4">
            <Link to="/about" className="nav-link">
             <span style={{fontFamily:'nos',paddingLeft:'0.8vw',color:'var(--mainBlue)'}}>אודותינו</span>
            </Link>
          </li>
        </ul>
    
        
        
        <Link to="/" id="img-link" className="mx-auto" > 
        <div >
        <img className="nav-item siteLogo" src='/img/Yigal-logo.jpg'></img>
        </div>
        </Link>
        
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
              <span style={{fontFamily:'nos'}}>עגלה</span> 
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
         border:1px outset var(--mainBlue);
         padding:7px;
         border-radius:0.3rem;
       }
    color: var(--mainDark) !important;
    font-size:2vw;
    text-transform:capitalize;
  }
  @media (max-width: 700px){
    .nav-link{
      font-size:5vw;
    }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;


