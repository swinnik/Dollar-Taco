import React, { useState, useEffect } from "react";
import axios from "axios";
import { calculateDistance } from "./DistanceFinder";

export default function TacoFinder({
  changePage,
  closestTacos,
  setClosestTacos,
  latLong,
}) {
  const [sortedTacos, setSortedTacos] = useState([]);
  const [closestTaco, setClosestTaco] = useState(null);
  console.log(latLong);
  let { latitude, longitude } = latLong;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleError = (error) => {
    console.log("Geolocation error:", error);
  };

  const handleSuccess = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("success", latitude, longitude);

    let sortedTacos = closestTacos.sort(
      (a, b) =>
        calculateDistance(a, latitude, longitude) -
        calculateDistance(b, latitude, longitude)
    );
    sortedTacos = sortedTacos.slice(0, 5);
    setSortedTacos(sortedTacos);
    setClosestTaco(sortedTacos[0]);
  };

  const notThisTaco = (e) => {
    if (sortedTacos.length <= 0) {
      changePage(e);
      axios.get("/vendors").then((response) => {
        setClosestTacos(Object.values(response.data).reverse());
      });
      return;
    }
    console.log(sortedTacos);
    console.log(closestTaco.name);
    sortedTacos.shift();
    console.log("asdfadfasdf", sortedTacos);
    setClosestTaco(sortedTacos[0]);
  };

  const openGoogleMapsDirections = () => {
    if (closestTaco) {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${closestTaco.latitude},${closestTaco.longitude}`;
      window.open(mapsUrl, "_blank");
    }
  };
  return (
    <div className="new-taco">
      <div className="big-button" name="front-page" onClick={notThisTaco}>
        Not This Taco
      </div>
      {closestTaco ? (
        <div>
          {closestTaco.name} is about{" "}
          {Math.round(calculateDistance(closestTaco, latitude, longitude), 2)}{" "}
          miles away
          <br />
          and only {closestTaco.price} dollars!
          <br />
          Make sure to check out their {closestTaco.bestfilling}!!!
          <br />
          {/* lat: {closestTaco.latitude} long: {closestTaco.longitude} */}
        </div>
      ) : (
        <div>Finding Closest Taco...</div>
      )}
      <div className="big-button" onClick={openGoogleMapsDirections}>
        {" "}
        Take Me To My Taco!{" "}
      </div>
    </div>
  );
}
