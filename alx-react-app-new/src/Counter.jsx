import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    textAlign: "center",
    marginTop: "30px",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    maxWidth: "300px",
    margin: "30px auto",
    backgroundColor: "#f0f8ff",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>
        Current Count: {count}
      </p>
      <button
        style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#007bff", color: "white" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
