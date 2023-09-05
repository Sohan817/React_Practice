import React, { Component } from "react";
// @ts-ignore
import loading from "./loading.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
