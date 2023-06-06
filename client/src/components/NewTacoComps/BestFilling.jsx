/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

export default function BestFilling({
  displayModal,
  setDisplayModal,
  setTacoDetails,
  setBestFilling,
}) {
  const showModal = () => {
    setDisplayModal(!displayModal);
  };

  const clickFilling = (e) => {
    let fillingName = e.target.getAttribute("value");
    setTacoDetails((prevState) => ({
      ...prevState,
      bestFilling: fillingName,
    }));
    setBestFilling(fillingName);
    showModal();
  };

  const fillings = (
    <>
      <div id="modal-background" onClick={showModal} />
      <div id="fillings">
        <div
          className="filling"
          value="Carne Asada"
          onClick={(e) => clickFilling(e)}
        >
          Carne Asada
        </div>
        <div
          className="filling"
          value="Carnitas"
          onClick={(e) => clickFilling(e)}
        >
          Carnitas
        </div>
        <div
          className="filling"
          value="Al Pastor"
          onClick={(e) => clickFilling(e)}
        >
          Al Pastor
        </div>
        <div
          className="filling"
          value="Chorizo"
          onClick={(e) => clickFilling(e)}
        >
          Chorizo
        </div>
        <div
          className="filling"
          value="Chicken"
          onClick={(e) => clickFilling(e)}
        >
          Chicken
        </div>
        <div
          className="filling"
          value="Suadero"
          onClick={(e) => clickFilling(e)}
        >
          Suadero
        </div>
      </div>
    </>
  );

  let modal = <></>;
  if (displayModal) {
    modal = fillings;
  }

  return <>{modal}</>;
}
