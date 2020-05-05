import React, { Component,useState } from "react";
import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
import { Button,Form,Col } from 'react-bootstrap';
import axios from 'axios'
export default class CartTotals extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  this.state = {
    email: '',
    address: '',
    products:'',
    phone: '',
    infoCheck:false
  }
}
   handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
      
  };

   onSubmit=(e)=>{
    e.preventDefault();
    const order = {
      email: this.state.email,
      address: this.state.address,
      phone:this.state.phone,
      products:this.props.value.cart
    }
    
    
    axios.post('http://localhost:5000/orders/add', order)
  .then(res => console.log(res.data)).then(res=>{alert('הפרטים נשלחו!') 
  this.reset()})

}
reset(){
  this.setState({
    address: '',
    phone:'',
    email:'',
    products:'',
    infoCheck:true
  })
}  
  
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    
 
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container" id="cart-container">
            <div className="row" >
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right" id="form-box">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                
                <h5>
                  <span className="cart-total"> subtotal :</span>{" "}
                  <strong>₪ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="cart-total"> tax :</span>{" "}
                  <strong>₪ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="cart-total"> total :</span>{" "}
                  <strong>₪ {cartTotal} </strong>
                </h5>
              
               
                <Form onSubmit={this.onSubmit}  >
                  {/* <h1>מלאו את הפרטים בבקשה</h1> */}
          <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>אימייל</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"  onChange={this.handleChange} />
          </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
          <Form.Label>כתובת</Form.Label>
          <Form.Control placeholder="...עיר , רחוב , קומה , דירה" name="address"  onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
          <Form.Label>מספר טלפון</Form.Label>
          <Form.Control placeholder="05*****" name="phone" onChange={this.handleChange} />
          </Form.Group>
          
          {!this.state.infoCheck?<Button variant="primary" type="submit" >
          Submit
          </Button>:''}
  
          </Form>   

                {this.state.infoCheck ? <PayPalButton
                  totalAmount={cartTotal}
                  clearCart={clearCart}
                  history={history}
                  cart={cart}
                /> : ''}
                </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
