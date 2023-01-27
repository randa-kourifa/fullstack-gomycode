import React, { useState } from "react";

function HandleName() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    alert("Elon Musk");
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default HandleName;
