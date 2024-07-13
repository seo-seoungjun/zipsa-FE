import React from "react";

function Intro({ img, text, index, name, textSize, bottom, fullpageApi }) {
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
        <div
          style={{
            position: "absolute",
            bottom: bottom,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            data-aos={"fade-up"}
            data-aos-duration={"600"}
            // data-aos-easing={"new-easing"}
            style={{
              height: textSize,
            }}
            src={text}
            alt={name}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
