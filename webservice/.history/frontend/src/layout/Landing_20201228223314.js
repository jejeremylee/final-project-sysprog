import React, { Component } from "react";
import MainCard from "../components/mainCard";
import Button from "react-bootstrap/Button";
import "./Landing.css";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

export class Landing extends Component {
  render() {
    return (
      <div>
        <MainCard />
      </div>
    );
  }
}

export default Landing;
