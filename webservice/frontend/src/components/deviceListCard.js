import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./deviceListCard.css";

export default class DeviceListCard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: this.props.device[3][1],
      bus: this.props.device[0][1],
      device:this.props.device[1][1],
      deviceUnbind:false,
      status:'binded',
    };
    this.handleUnbind= this.handleUnbind.bind(this);
    this.handleBind = this.handleBind.bind(this);
  }

  async handleUnbind(bus, name){
    const buz = bus.split("");

    const host ='http://localhost:8080/matakubiru/unbind-usb'

    fetch(host,{
      method: 'POST',
      body:JSON.stringify(
        {
          "bus":buz[2],
        "usbName":name
      }
      )
      ,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    this.setState({
      deviceUnbind:true,
      status:'unbinded',
  })
  }

  async handleBind(bus, name){
    const buz = bus.split("");

    const host ='http://localhost:8080/matakubiru/bind-usb'

    fetch(host,{
      method: 'POST',
      body:JSON.stringify(
        {
          "bus":buz[2],
        "usbName":name
      }
      )
      ,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    this.setState({
      deviceUnbind:false,
      status:'binded',
  })
  }

  render() {
    return (
      <>
      {this.state.name === "Linux Foundation 2.0 root hub" | 
      this.state.name === "Linux Foundation 1.1 root hub" |
      this.state.name === "VirtualBox USB Tablet"
      ?
      null
      :
      <div className="devistListContainer">
        <div className="deviceContainer">
          <div className="deviceName">{this.state.name}</div>
          <div className="deviceDetails">Bus: {this.state.bus}</div>
          <div className="deviceDetails">Device: {this.state.device}</div>
          <div className="deviceDetails">Status: {this.state.status}</div>
        </div>

        <div className="buttonContainer">
        {this.state.deviceUnbind ?
          <Button variant="outline-light" className="bindButton" onClick={() =>this.handleBind(this.state.bus, this.state.name)}>
          Bind
        </Button>
          :
          <Button variant="outline-light" className="unbindButton" onClick={() =>this.handleUnbind(this.state.bus, this.state.name)}>
          Unbind
        </Button>
          }
        </div>

      </div>
        }
        </>
    );
  }
}
