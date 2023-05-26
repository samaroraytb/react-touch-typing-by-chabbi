import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./body.css";

function Body() {
  const selectorObject = useSelector((reducer) => reducer.textData);

  return (
    <>
      <Header />
      <div className="body-main-container">
        <div className="inside-container-body">
          <p className="demo-data-body">{selectorObject}</p>
          <textarea className="body-user-input"></textarea>
        </div>
      </div>
    </>
  );
}

export default Body;
