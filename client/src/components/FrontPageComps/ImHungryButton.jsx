// eslint-disable-next-line quotes
import React from "react";

export default function ImHungry({ changePage }) {
  return (
    <div
      className="big-button"
      name="taco-finder"
      onClick={(e) => changePage(e)}
    >
      Im Hungry!
    </div>
  );
}
