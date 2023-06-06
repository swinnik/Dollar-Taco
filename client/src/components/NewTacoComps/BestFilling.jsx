import React from "react";

export default function BestFilling() {
  return (
    <div onChange={(e) => selectFilling(e)}>
      <div value="Best Taco Flavor">Best Taco Filling</div>
      <div value="Carnitas">Carnitas</div>
      <div value="Carne Asada">Carnitas</div>
      <div value="Al Pastor">Al Pastor</div>
      <div value="Chorizo">Chorizo</div>
      <div value="Chicken">Chicken</div>
      <div value="Suadero">Suadero</div>
    </div>
  );
}
