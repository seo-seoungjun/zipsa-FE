import React from "react";

function Talk({
  left,
  top,
  cat,
  talk1,
  talk2,
  talk3,
  name,
  height1,
  height2,
  height3,
}) {
  let isCat = false;
  let isTalk1 = false;
  let isTalk2 = false;
  let isTalk3 = false;

  if (cat != null) {
    isCat = true;
  }
  if (talk1 != null) {
    isTalk1 = true;
  }
  if (talk2 != null) {
    isTalk2 = true;
  }
  if (talk3 != null) {
    isTalk3 = true;
  }
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isCat ? (
        <div>
          <img
            src={cat}
            alt={name}
            style={{
              height: "13vh",
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {isTalk1 ? (
        <div>
          <img
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            src={talk1}
            alt={name}
            style={{
              height: height1,
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {isTalk2 ? (
        <div>
          <img
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            data-aos-delay={"800"}
            src={talk2}
            alt={name}
            style={{
              height: height2,
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {isTalk3 ? (
        <div>
          <img
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            data-aos-delay={"1600"}
            src={talk3}
            alt={name}
            style={{
              height: height3,
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Talk;
