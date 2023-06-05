/* eslint-disable import/extensions */
/* eslint-disable quotes */
import axios from "axios";
import React, { useState, useEffect } from "react";
import ImHungryButton from "./FrontPageComps/ImHungryButton.jsx";
import NewTacoButton from "./FrontPageComps/NewTacoButton.jsx";

// note: if App parent re-renders child components will render too
export default function App() {
  return (
    <div id="App">
      <NewTacoButton />
      <div>OneDollarTaco</div>
      <ImHungryButton />
    </div>
  );
}
