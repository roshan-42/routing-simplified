import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Axios.css";
import axios from "axios";
import { useState } from "react";
function Axios() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-3">
        <form action="">
          <h1>API practice</h1>
          <input type="text" className="form-control" />
          <br />
          <input type="text" className="form-control" />
          <button className="btn btn-primary">Click</button>
        </form>
      </div>
    </div>
  );
}
export default Axios;
