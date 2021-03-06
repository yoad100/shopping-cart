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
    infoCheck:false,
    isChecked:false
  }
}
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    })}
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
    
    
    axios.post('https://yigal-store.herokuapp.com/orders/add', order)
  .then(res => console.log(res.data)).then(res=>{alert('הפרטים נשלחו!') 
  this.reset()}).catch((error)=>(alert('היתה בעיה עם הפרטים אנא נסה שוב!'))
  )

}
reset(){
  this.setState({
    address: '',
    phone:'',
    email:'',
    products:'',
    infoCheck:true,
    isChecked:false
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
                    נקה עגלה
                  </button>
                </Link>
                <h5>
                  <span className="cart-total"> מחיר :</span>{" "}
                  <strong> {'₪'+cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="cart-total"> מע"מ :</span>{" "}
                  <strong> {'₪'+cartTax} </strong>
                </h5>
                <h5>
                  <span className="cart-total"> סך הכל: </span> {" "}
                  <strong>  {'₪'+cartTotal} </strong>
                </h5>
                    
               
                <Form onSubmit={this.onSubmit}  >
                 
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
           <span>קראתי ואני מאשר את ה<a href="http://google.com/" target="_blank">תנאים</a>  </span> 
           <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} className="FormCheckBox"></input>
          <br/><br/>
              {
            (() => {
                if (!this.state.isChecked)
                  return <span></span>
                else
                  return <span>{!this.state.infoCheck?<Button variant="primary" type="submit" >
                  Submit
                  </Button>:''}</span>
            })()
          }          
          
          
  
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
