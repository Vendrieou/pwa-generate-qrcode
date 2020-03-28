import React from "react";
import "./styles.css";
import { generate, generateToCanvas } from "./action/qrcode";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div id="image" />
      <div id="container" />
      <div>
        <button onClick={() => generate()}>generate</button>
      </div>
      <br />
      <div>
        <button onClick={() => generateToCanvas()}>generate To Canvas</button>
      </div>
    </div>
  );
}
