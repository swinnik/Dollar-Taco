/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import axios from "axios";
import BestFilling from "./BestFilling";

const { useState, useEffect } = React;

export default function NewTacoPage({
  changePage,
  tacoDetails,
  setTacoDetails,
}) {
  const { latitude, longitude } = tacoDetails;
  const [bestFilling, setBestFilling] = useState("Best Filling");
  const [displayModal, setDisplayModal] = useState(false);

  const submitTaco = (e) => {
    console.log("UPDATE POSTGRES");
    console.log(tacoDetails);
    axios
      .post(
        "/vendors",
        { ...tacoDetails },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("CLIENT ATTEMPTING POST *SUCCESS*", response.data);
      })
      .catch((error) => {
        console.log("CLIENT ATTEMPTING POST *ERROR*", error.message);
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
          //   placeholder="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => clickFilling(e)}
        />
        <input
          //   placeholder="latitude"
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
