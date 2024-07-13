import React from "react";

function BackBtn() {
  return (
    <div
      style={{
        position: "fixed",
        top: "5vh",
        left: "5vh",
        zIndex: "4",
      }}
    >
      <img
        src={"/img/common/backBtn.svg"}
        style={{
          height: "6vh",
          width: "6vh",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      ></img>
    </div>
  );
}

export default BackBtn;
