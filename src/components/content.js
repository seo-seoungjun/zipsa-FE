import React from "react";
import Talk from "./catTalk";

function Content({
  cat,
  name,
  img,
  left,
  top,
  talk1,
  talk2,
  talk3,
  height1,
  height2,
  height3,
}) {
  return (
    <section
      className={`section`}
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            height: "95vh",
            zIndex: "-1",
          }}
          src={img}
          alt={name}
        />
      </div>
      <Talk
        name={name}
        cat={cat}
        left={left}
        top={top}
        height1={height1}
        height2={height2}
        height3={height3}
        talk1={talk1}
        talk2={talk2}
        talk3={talk3}
      />
    </section>
  );
}

export default Content;
