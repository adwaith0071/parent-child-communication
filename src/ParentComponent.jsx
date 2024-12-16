import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className="parent-container">
      <h1>Parent Component</h1>
      <p>{message}</p>

      <ChildComponent updateMessage={updateMessage} />
    </div>
  );
};

export default ParentComponent;
