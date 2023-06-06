import React from "react";

export default function BestFilling({
  bestFilling,
  displayModal,
  setDisplayModal,
}) {
  const showModal = () => {
    setDisplayModal(!displayModal);
  };
  const fillings = (
    <>
      <div id="modal-background" onClick={showModal} />
      <div id="fillings">
        <div className="filling" value="Best Taco Flavor">
          Best Taco Filling
        </div>
        <div className="filling" value="Carnitas">
          Carnitas
        </div>
        <div className="filling" value="Carne Asada">
          Carnitas
        </div>
        <div className="filling" value="Al Pastor">
          Al Pastor
        </div>
        <div className="filling" value="Chorizo">
          Chorizo
        </div>
        <div className="filling" value="Chicken">
          Chicken
        </div>
        <div className="filling" value="Suadero">
          Suadero
        </div>
      </div>
    </>
  );

  let modal = <></>;
  if (displayModal) {
    modal = fillings;
  }

  return (
    <>
      <div
        className="like-input"
        onClick={showModal}
        onChange={(e) => selectFilling(e)}
      >
        Best Filling
      </div>
      {modal}
    </>
  );
}
