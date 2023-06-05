/* eslint-disable import/extensions */
/* eslint-disable quotes */
import axios from "axios";
import React, { useState, useEffect } from "react";
import ImHungryButton from "./FrontPageComps/ImHungryButton.jsx";
import NewTacoButton from "./FrontPageComps/NewTacoButton.jsx";
import FrontPage from "./FrontPageComps/FrontPage.jsx";
import TacoFinderPage from "./TacoFinderComps/TacoFinderPage.jsx";
import NewTacoPage from "./NewTacoComps/NewTacoPage.jsx";
import DonatePage from "./DonateComps/DonatePage.jsx";

// note: if App parent re-renders child components will render too
export default function App() {
  const [pageID, setPageID] = useState("front-page");

  const changePage = (e) => {
    setPageID(e.target.getAttribute("name"));
    console.log(e.target.getAttribute("name"));
  };

  let commonProps = {
    pageID,
    setPageID,
    changePage,
  };

  let Page = <FrontPage {...commonProps} />;

  // const pages = {
  //   "front-page": <FrontPage {...commmonProps} />,
  //   "new-spot": <NewTacoPage {...commmonProps} />,
  //   donate: <DonatePage {...commmonProps} />,
  //   "taco-finder": <TacoFinderPage {...commmonProps} />,
  // };
  switch (pageID) {
    case "front-page":
      Page = <FrontPage {...commonProps} />;
      break;
    case "new-spot":
      Page = <NewTacoPage {...commonProps} />;
      break;
    case "taco-finder":
      Page = <TacoFinderPage {...commonProps} />;
      break;
    case "donate":
      Page = <DonatePage {...commonProps} />;
      break;
    default:
      Page = <FrontPage {...commonProps} />;
  }

  // useEffect(() => {
  //   Page = pages[pageID];
  //   console.log(pageID, Page);
  // }, [pageID]);

  return (
    <>
      <div id="App">{Page}</div>
    </>
  );
}
