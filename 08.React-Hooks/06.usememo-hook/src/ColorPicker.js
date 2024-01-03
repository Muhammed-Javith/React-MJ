import React from "react";

const ColorPicker = ({ handleChange, color }) => {
  return (
    <div>
      <label>Select Color:</label>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
