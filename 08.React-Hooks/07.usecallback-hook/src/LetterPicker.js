import React from "react";

const LetterPicker = ({ handleChange, letter }) => {
  return (
    <div>
      <label>Select Letter:</label>
      <input type="text" maxLength="1" value={letter} onChange={handleChange} />
    </div>
  );
};

export default LetterPicker;
