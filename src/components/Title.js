import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row" >
      <img src></img>
      <div className="col-10 mx-auto my-4 text-center text-title">
        <h1 className="title-size">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
