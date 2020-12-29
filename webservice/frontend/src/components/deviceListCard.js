import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./deviceListCard.css";

export default class DeviceListCard extends Component {
  render() {
    return (
      <div className="devistListContainer">
        <div className="deviceContainer">
          <div className="deviceName">{this.props.device[3][1]}</div>
          <div className="deviceDetails">Bus: {this.props.device[0][1]}</div>
          <div className="deviceDetails">Device: {this.props.device[1][1]}</div>
        </div>
        <div className="buttonContainer">
          <Button variant="outline-light" className="bindButton">
            Bind
          </Button>
        </div>
      </div>
    );
  }
}
