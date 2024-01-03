import React from "react";
import Kar from "./stateobjimp";
class Cars extends React.Component {
    constructor(props) {
      super(props);
    this.state = {brand: "Ford"};
    }
    render() {
      return (
        <>
        <div>
          <h1>My Car</h1>
        </div>
        <Kar />
        </>

      );
    }
  }
  export default Cars