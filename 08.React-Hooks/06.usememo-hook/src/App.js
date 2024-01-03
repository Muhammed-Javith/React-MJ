import React, { useState, useMemo } from "react";

// Assuming ColorPicker and LetterPicker are components you have created
import ColorPicker from './ColorPicker';
import LetterPicker from './LetterPicker';

function App(props) {
  const [color, setColor] = useState('#fff');
  const [letter, setLetter] = useState('a');

  // Define the randomColor function if it's not already defined elsewhere
  const randomColor = () => {
    // Simple random color generator
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  const handleColorChange = useMemo(() => setColor(randomColor()), []);
  const handleLetterChange = useMemo(() => setLetter(
              String.fromCharCode(97 + Math.floor(Math.random() * 26))
              ), []); // For random letter

  return (
    <div>
      <ColorPicker handleChange={handleColorChange} color={color} />
      <LetterPicker handleChange={handleLetterChange} letter={letter} />
      <hr />
      <h1 style={{color}}>{letter}</h1>
    </div>
  );
}


export default App;
