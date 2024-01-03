import React, { Component } from "react";
import Counter from "./counter";

//normal way for usign state
const initialCount = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: initialCount };
  }
  render() {
    return (
      <>
        <div>
          <h1> without Use-State Hook</h1>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState(({ count }) => ({ count: count + 1 }))} >
            Click me
          </button>
        </div>
        <h1>with Use-State</h1>
        <Counter/>
      </>

    );
  }
}


export default App;
