import React, { useState, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  marginR: number;
  title: string;
  count: number;
  countColor: string;
  countUnit: string;
  newCount: number;
}

const DataCounter: React.FC<InputProps> = ({ marginR, title, count, countColor, countUnit, newCount }) => {
  return (
    <div style={{ width: 200, height: 160, backgroundColor: "white", display: "inline-block", marginRight: marginR, paddingTop: 4, borderBottomWidth: 4, borderRadius: 8 }}>
      <h1 style={{ fontSize: 12, cursor: "default", marginTop: 8, marginLeft: 12, fontWeight: "bold", display: "inline" }}>{title}</h1>
      <h1 style={{ fontSize: 16, display: "inline", float: "right", marginRight: 12, cursor: "pointer" }}>⋮</h1>
      <h2 style={{ color: countColor, fontSize: 42, fontWeight: "bold", textAlign: "center", marginTop: 4 }}>{count}</h2>
      <h3 style={{ color: "gray", fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: -10, cursor: "default" }}>{countUnit}</h3>
      <div style={{ width: 200, backgroundColor: "#eeeeee", height: 36, marginTop: 8, paddingTop: 8 }}>
        <h4 style={{ fontSize: 12, marginLeft: 12, color: "gray", fontWeight: "bold", cursor: "default" }}>New Today: {newCount}</h4>
      </div>
    </div>
  );
};

export default DataCounter;
