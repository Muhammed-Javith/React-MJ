import React from "react";
import Cars from "./stateimp";
//multi component implementation
 class Bike extends React.Component {
    render() {
        return <>
        <h2>This is inner Component!</h2>
        <Cars/>
        </>
      }
 }
  class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Bike />
        </div>
      );
    }
  }
  export default Garage