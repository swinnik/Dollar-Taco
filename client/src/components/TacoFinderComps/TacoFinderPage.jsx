import React, { useState } from "react";
import axios from "axios";

export default function TacoFinder({
  changePage,
  closestTacos,
  setClosestTacos,
}) {
  let taco = closestTacos[0];
  const [closestTaco, setClosestTaco] = useState(taco);

  const notThisTaco = (e) => {
    if (closestTacos.length === 2) {
      changePage(e);
      axios.get("/vendors").then((response) => {
        setClosestTacos(Object.values(response.data).reverse());
      });
      return;
    }
    console.log(closestTacos);
    console.log(closestTaco.name);
    closestTacos.shift();
    console.log("asdfadfasdf", closestTacos);
    setClosestTaco(closestTacos[0]);
  };

  return (
    <div className="new-taco">
      <div className="big-button" name="front-page" onClick={notThisTaco}>
        Not This Taco
      </div>
      <div>
        {closestTaco.name} is pretty close by...
        <br />
        Make sure to check out their {closestTaco.bestfilling}!!! <br />
      </div>
      <div className="big-button"> Take Me To My Taco! </div>
    </div>
  );
}
