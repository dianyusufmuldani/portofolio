import React from "react";

const TextApp = ({ value, fontSize, fontWeight }) => {
  return (
    <div>
      <p
        style={{ fontSize: fontSize, color: "#BBBBBB", fontWeight: fontWeight }}
      >
        {value}
      </p>
    </div>
  );
};

export default TextApp;
