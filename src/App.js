import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import about from "./about";
import SignUp from "./components/Register";
class App extends Component {
  state = {
    LoginOnTop: true
  };

  clicked = () => {
    this.setState(prevState => ({ LoginOnTop: !prevState.LoginOnTop }));
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path='/users' component={SignUp}/>
          <Route path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={about}/>
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
