import React, { useState } from "react";

const ChildComponent = ({ updateMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    updateMessage(inputValue);
    setInputValue(""); 
  };

  return (
    <div className="child-container">
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a message"
      />
      <button onClick={handleButtonClick}>Update Parent Message</button>
    </div>
  );
};

export default ChildComponent;
