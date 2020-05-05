import React, { Component } from "react";
import axios from 'axios'
import { detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    axios.get('https://yigal-store.herokuapp.com',)
    .then(res => {const data=res.data
      let products = [];
      data.forEach(item => {
        const singleItem = { ...item };
        products = [...products, singleItem];
      });
      this.setState(() => {
        return { products };
      }, this.checkCartItems); })
  };

  getItem = _id => {
    const product = this.state.products.find(item => item._id === _id);
    return product;
  };
  handleDetail = _id => {
    const product = this.getItem(_id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = _id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(_id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    console.log(product)
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product }
      };
    }, this.addTotals);
  };
  openModal = _id => {
    const product = this.getItem(_id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = _id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item._id === _id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    console.log(product)
    if(product.quantity > product.count){
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  }
    else{
      alert('הגעתם לכמות המוצר המקסימלית ')
    }
  };
  decrement = _id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item._id === _id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(_id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };
  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  removeItem = _id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(_id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item._id !== _id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals);
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
