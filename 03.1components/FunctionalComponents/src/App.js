import React from "react";
//normal way
// function App() {
 
//   return <h2>Hi, I am a Car!</h2>;
// }

// props passing into function

// component inside the component
function Car() {
  return <h2>Welcom Mr.car!</h2>;
}

function App(props) {
 
  return <>
   <h2>I am a {props.color} Car!</h2>
   <Car/>
   </>
}

export default App;
