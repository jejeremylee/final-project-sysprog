import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

export default class DeviceListCard extends Component {
  render() {
    return (
      <div className="devistListContainer">
        <div className="deviceContainer">
          <div className="deviceName">USB Device 1</div>
          <div className="deviceDetails">
            Detail USB Device 1 but longerrr...
          </div>
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
