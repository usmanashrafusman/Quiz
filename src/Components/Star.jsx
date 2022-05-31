import React from "react";

const Star = ({ difficulty }) => {
  return (
    <p>
      {difficulty === "easy" ? (
        <>
          <span>&#9733;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;;</span>{" "}
        </>
      ) : difficulty === "hard" ? (
        <>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
        </>
      ) : (
        <>
          <span>&#9733;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;;</span>
        </>
      )}
    </p>
  );
};

export default Star;
