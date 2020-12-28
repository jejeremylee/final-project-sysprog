import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import DeviceListCard from "./deviceListCard";
import "./style.css";

export default class mainCard extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="pageTitleContainer">
          <h2>USB Device Driver Checker</h2>
          <h4>an utility made by mataku biru</h4>
        </div>
        <div className="listContainer"></div>
      </div>
    );
  }
}
