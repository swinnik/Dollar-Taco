import React from "react";

export default function NewTacoButton({ changePage }) {
  return (
    <div className="big-button" name="new-spot" onClick={(e) => changePage(e)}>
      New Taco Spot?
    </div>
  );
}
