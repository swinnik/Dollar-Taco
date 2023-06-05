import React from "react";

const { useState } = React;

export default function NewTacoPage({ changePage }) {
  const [tacoDetails, setTacoDetails] = useState({
    name: "",
    longitude: "",
    latitude: "",
    bestFlaver: "",
  });

  const submitTaco = (e) => {
    console.log("UPDATE POSTGRES");
    console.log(tacoDetails);
    changePage(e);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTacoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div id="NewTaco">
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
        <input
          placeholder="best taco flavor?"
          name="bestFlaver"
          value={tacoDetails.bestFlaver}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div
        className="big-button"
        name="front-page"
        onClick={(e) => submitTaco(e)}
      >
        Add the Spot!
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
