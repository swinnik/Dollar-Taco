/* eslint-disable import/extensions */
/* eslint-disable quotes */
import axios from "axios";
import React, { useState, useEffect } from "react";
import ImHungryButton from "./ImHungryButton.jsx";
import NewTacoButton from "./NewTacoButton.jsx";

// note: if App parent re-renders child components will render too
export default function FrontPage(props) {
  const { pageID } = props;
  //   console.log(pageID);

  const commonProps = { ...props };
  const { changePage } = props;

  return (
    <div id="FrontPage">
      <NewTacoButton {...commonProps} />
      <div
        id="logo"
        className="big-button"
        name="donate"
        onClick={(e) => changePage(e)}
      >
        One Dollar Taco
      </div>
      <ImHungryButton {...commonProps} />
    </div>
  );
}
