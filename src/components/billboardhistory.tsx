import React, { useState, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
}

const BillboardHistory: React.FC<InputProps> = ({ content }) => {
  return (
    <div style={{ backgroundColor: "#feb249", padding: 8, borderRadius: 8, marginBottom: 4, borderBottomWidth: 4, cursor: "default" }}>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>{content}</p>
    </div>
  );
};

export default BillboardHistory;
