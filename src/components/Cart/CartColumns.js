import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">מוצרים</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">שם המוצר</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">מחיר</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">כמות</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">הסר</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">סה"כ</p>
          </div>
        </div>
      </div>
    );
  }
}
