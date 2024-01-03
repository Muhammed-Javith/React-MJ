import { useRef, useState } from "react";
import Counter from "./counter";
function App() {
  const inputRef = useRef(null);
  const [inputColor, setInputColor] = useState("black");

  const onBtnClick = () => {
    inputRef.current.focus();
    setInputColor("red");
    <br></br> // Change the color to red when the button is clicked
  };

  return (
    <>
      <input ref={inputRef} style={{ color: inputColor }} /><br></br> 
      <button onClick={onBtnClick}>Focus the text input and change color</button>
      <br></br><br></br> <br></br> 
      <Counter/>
    </>
  );
}

export default App;

