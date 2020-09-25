import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  state = {
    products:this.props.products,
    showProducts:false
  };
  
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name=":המוצרים" title="שלנו" />
            <div className="row" style={{justifyContent:'center'}}>
              {/* {!this.state.showProducts?<h1>Loading...</h1>:''} */}
              <ProductConsumer>
                {value=>{
                  if(!value.showProducts)return <h1 >Loading...</h1>
                  else return ''
                }}
              </ProductConsumer>
              <ProductConsumer>
                {value => { 
                  return value.products.map(product => {
                    return <Product  key={product._id} product={product} />;
                  })}}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
