import React from "react";
import axios from "axios";
import BestFilling from "./BestFilling";

const { useState, useEffect } = React;

export default function NewTacoPage({
  changePage,
  latitude,
  longitude,
  tacoDetails,
  setTacoDetails,
}) {
  const [bestFilling, setBestFilling] = useState("Best Filling");
  const [displayModal, setDisplayModal] = useState(false);

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

  const clickFilling = (e) => {
    const { name, value } = e.target;
    setTacoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  //     } else {
  //       console.log("Geolocation is not supported by this browser.");
  //     }
  //   }, []);

  //   const handleError = (error) => {
  //     console.log("Geolocation error:", error);
  //   };

  //   let latitude, longitude;

  //   const handleSuccess = (position) => {
  //     // Access position.coords.latitude and position.coords.longitude here
  //     latitude = position.coords.latitude;
  //     longitude = position.coords.longitude;
  //     setTacoDetails({
  //       name: tacoDetails.name,
  //       latitude: longitude,
  //       longitude: latitude,
  //       bestFilling: "",
  //     });
  //     console.log("Latitude:", latitude);
  //     console.log("Longitude:", longitude);
  //   };

  const fillingProps = {
    setBestFilling,
    setDisplayModal,
    displayModal,
    tacoDetails,
    setTacoDetails,
  };

  return (
    <div className="new-taco">
      <div className="input-block">
        <input
          placeholder="Name of the Spot"
          name="name"
          value={tacoDetails.name}
          onChange={(e) => clickFilling(e)}
        />
        <input
          placeholder="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => clickFilling(e)}
        />
        <input
          placeholder="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => clickFilling(e)}
        />
        <input
          placeholder="Best Filling"
          name="Best Filing"
          value={bestFilling}
          onChange={(e) => clickFilling(e)}
          onClick={() => setDisplayModal(true)}
        />
      </div>
      <BestFilling {...fillingProps} />
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
