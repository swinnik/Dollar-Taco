import React from "react";

export default function TacoFinder({ changePage }) {
  return (
    <div className="new-taco">
      <div
        className="big-button"
        name="front-page"
        onClick={(e) => changePage(e)}
      >
        Bring me back
      </div>
      <div>
        taco information <br />
        taco information <br />
        taco information <br />
      </div>
      <div className="big-button"> GoogleMaps </div>
    </div>
  );
}
