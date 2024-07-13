import React from "react";

function Btn() {
  return (
    <div
      className={"upDownBtn"}
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        bottom: "7vh",
        right: "5vw",
        zIndex: "4",
      }}
    >
      <img
        src={"/img/common/upBtn.svg"}
        style={{
          height: "6vh",
          width: "6vh",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={() => window.fullpage_api.moveSectionUp()}
      ></img>
      <img
        src={"/img/common/downBtn.svg"}
        style={{
          height: "6vh",
          width: "6vh",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={() => window.fullpage_api.moveSectionDown()}
      ></img>
    </div>
  );
}

export default Btn;
