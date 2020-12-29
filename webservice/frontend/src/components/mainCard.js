import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DeviceListCard from "./deviceListCard";
import "./mainCard.css";

export default class MainCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      deviceList: [],
    };
  }


  componentDidMount () {
    const host ='http://localhost:8080/matakubiru/usb-list'

    fetch(host,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then ((Response) => Response.json())
    .then ((resp) => {
        console.log(resp)
        this.setState({
            deviceList:resp,
        })
    })
}
  render() {

    // this.state.deviceList.map(d => 
    //   console.log(d)
    //   );

    //   Object.keys(this.state.deviceList).map(name => (
    //     console.log(this.state.deviceList.tag)
    //   ))
      
    return (
      <div className="mainContainer">
        <div className="pageTitleContainer">
          <h2>USB Device Driver Checker</h2>
          <h4>an utility made by mataku biru</h4>
        </div>
        <div className="listContainer">
        {this.state.deviceList.length > 0 ?

        this.state.deviceList.map( device =>
           <DeviceListCard
            device={device}
          />
        )
          :
          <div className="noDeviceText">
            No USB devices attached in the system
            </div>
          }
        </div>
        <div className="runButtonContainer">
          <Button variant="outline-light" className="bindButton" block>
            Run
          </Button>
        </div>
      </div>
    );
  }
}
