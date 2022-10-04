import React from "react";
import "./loader.css";
import loadingImg from "../assets/loading.gif";

export const Loader2 = () => {
  return (
    <React.Fragment>
      <div class="loader"></div>
    </React.Fragment>
  );
};

export const Loader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={loadingImg} alt="" />
        </div>
      </div>
    </div>
  );
};
