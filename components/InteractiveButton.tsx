"use client";

import { useState } from "react";

export function InteractiveButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert("Hello from MDX!");
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "12px 20px",
        background: clicked ? "#7c6aff" : "#9333ea",
        color: "white",
        borderRadius: "12px",
        border: "none",
        marginTop: "20px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.2s ease",
        transform: clicked ? "scale(0.95)" : "scale(1.0)",
        boxShadow: "0 4px 14px rgba(147, 51, 234, 0.4)",
      }}
      onMouseOver={(e) => {
        if (!clicked) {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(147, 51, 234, 0.6)";
        }
      }}
      onMouseOut={(e) => {
        if (!clicked) {
          e.currentTarget.style.transform = "scale(1.0)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(147, 51, 234, 0.4)";
        }
      }}
    >
      Interactive MDX Button 🚀
    </button>
  );
}
