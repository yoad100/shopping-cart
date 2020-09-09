import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  state = {
    products:this.props.products
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name=":המוצרים" title="שלנו" />
            <div className="row">
              <ProductConsumer>
                {value => {if(value){
                  return value.products.map(product => {
                    return <Product key={product._id} product={product} />;
                  })}
                  else
                  return <h1 style={{textAlign:'center',width:'100%'}}>Loading ...</h1>
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
