import React from "react";
import Car from "./Car";
//props in class components.
class App extends React.Component {
  render() {
    return <>
    <h2>I am a {this.props.color} App!</h2>
    <Car model="Mustang"/>
    </>

  }
}
export default App;
