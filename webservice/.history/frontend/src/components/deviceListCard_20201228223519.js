import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./deviceListCard.css";

export default class DeviceListCard extends Component {
  render() {
    return (
      <div className="devistListContainer">
        <div className="deviceContainer">
          <div className="deviceName">{this.props.deviceName}</div>
          <div className="deviceDetails">{this.props.deviceDetails}</div>
        </div>
        <div className="buttonContainer">
          <Button variant="outline-light">Bind</Button>
        </div>
      </div>
    );
  }
}
