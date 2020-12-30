import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
        this.setState({
            deviceList:resp,
        })
    })
}
  render() {
      
    return (
      <div className="mainContainer">
        <div className="pageTitleContainer">
          <h2>USB Device Driver Monitor</h2>
          <h4>an utility made by matakubiru</h4>
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
        <div className="help">
          ** refresh the page if there's new usb device connected to the kernel
          </div>
          <div className="help">
          ** bind all your unbinded usb device first before refreshing the page
        </div>
      </div>
    );
  }
}
