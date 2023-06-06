import React from "react";
import axios from "axios";

const { useState, useEffect } = React;

export default function NewTacoPage({ changePage }) {
  const submitTaco = (e) => {
    console.log("UPDATE POSTGRES");
    console.log(tacoDetails);
    axios
      .post("/venders", { ...tacoDetails })
      .then((response) =>
        console.log("CLIENT ATTEMPTING POST *SUCCESS*", response)
      )
      .catch((error) => {
        console.log("CLIENT ATTEMPTING POST *ERROR*", error);
      });
    changePage(e);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTacoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

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

  let latitude, longitude;

  const handleSuccess = (position) => {
    // Access position.coords.latitude and position.coords.longitude here
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    setTacoDetails({
      name: "",
      latitude: longitude,
      longitude: latitude,
      bestFlaver: "",
    });
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
  };
  const [tacoDetails, setTacoDetails] = useState({
    name: "",
    latitude: "",
    longitude: "",
    bestFlaver: "",
  });

  const selectFilling = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="new-taco">
      <div className="input-block">
        <input
          placeholder="Name of the Spot"
          name="name"
          value={tacoDetails.name}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          placeholder="longitude"
          name="longitude"
          value={tacoDetails.longitude}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          placeholder="latitude"
          name="latitude"
          value={tacoDetails.latitude}
          onChange={(e) => handleInputChange(e)}
        />
        <select onChange={(e) => selectFilling(e)}>
          <option value="Best Taco Flavor">Best Taco Filling</option>
          <option value="Carnitas">Carnitas</option>
          <option value="Carne Asada">Carnitas</option>
          <option value="Al Pastor">Al Pastor</option>
          <option value="Chorizo">Chorizo</option>
          <option value="Chicken">Chicken</option>
          <option value="Suadero">Suadero</option>
        </select>
      </div>
      <div
        className="big-button"
        name="front-page"
        onClick={(e) => submitTaco(e)}
      >
        Add This Spot!
      </div>
      <div
        className="big-button"
        name="front-page"
        onClick={(e) => changePage(e)}
      >
        nvm I want a Taco!
      </div>
    </div>
  );
}
