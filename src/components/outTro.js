import React from "react";
import emailjs from "emailjs-com";

function OutTro({ img, question, comment, email, thank }) {
  const questionForm = document.querySelector(".questionForm");
  const commentFormWrap = document.querySelector(".commentFormWrap");
  const emailFormWrap = document.querySelector(".emailFormWrap");
  const outTroWrap = document.querySelector(".outTroWrap");
  const lastPage = document.querySelector(".lastPage");
  const nextBtnWrap = document.querySelector(".nextBtnWrap");

  const onBtnClick = (el, showEl) => {
    el.style.display = "none";
    showEl.style.display = "flex";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_70bqdkq",
        "template_8bjqk2a",
        e.target,
        "user_Z5q4NGImILIXEJn9O9M29"
      )
      .then(
        (result) => {
          console.log(result.text);
          commentFormWrap.style.display = "none ";
          emailFormWrap.style.display = "flex";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendUserEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_70bqdkq",
        "template_qux8frg",
        e.target,
        "user_Z5q4NGImILIXEJn9O9M29"
      )
      .then(
        (result) => {
          console.log(result.text);
          emailFormWrap.style.display = "none";
          outTroWrap.style.display = "none";
          lastPage.style.display = "flex";
          nextBtnWrap.style.display = "none";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        }}
      >
        <img
          src={img}
          style={{
            height: "95vh",
          }}
        />
      </div>
      <div
        className={"outTroWrap"}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(16, 16, 16 , 0.9)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className={"questionForm"}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={question} style={{ height: "9vh" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0 40px",
              marginTop: "9vh",
            }}
          >
            <img
              onClick={() => {
                onBtnClick(questionForm, commentFormWrap);
                nextBtnWrap.style.display = "flex";
              }}
              src={"/img/common/yesBtn.svg"}
              alt={"yesBtn"}
              style={{
                height: "15vh",
                cursor: "pointer",
              }}
            />
            <img
              onClick={() => {
                onBtnClick(questionForm, commentFormWrap);
                nextBtnWrap.style.display = "flex";
              }}
              src={"/img/common/noBtn.svg"}
              alt={"noBtn"}
              style={{
                height: "15vh",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div
          className={"commentFormWrap"}
          style={{
            display: "none",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={comment} alt={comment} style={{ height: "6vh" }} />
            <form
              name="commentForm"
              onSubmit={sendEmail}
              className={"commentForm"}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <textarea
                required
                placeholder={
                  "오늘 앱을 체험해보며 마음에 들었던 부분, 마음에 들지 않았던 부분 등 집사에게 전하고 싶은 한마디를 적어주세요 :)"
                }
                name={"comment"}
                style={{
                  fontSize: "30px",
                  outline: "none",
                  borderRadius: "20px",
                  width: "60vw",
                  height: "40vh",
                  resize: "none",
                  textAlign: "center",
                }}
              />
              <button
                type={"submit"}
                style={{ all: "unset", marginTop: "30px" }}
              >
                <img
                  src={"/img/common/submitBtn.svg"}
                  alt={"submitBtn"}
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </button>
            </form>
          </div>
        </div>
        <div
          className={"emailFormWrap"}
          style={{
            justifyContent: "center",
            flexDirection: "column",
            display: "none",
          }}
        >
          <img className={"emailImg"} src={email} style={{ height: "20vh" }} />
          <form
            onSubmit={sendUserEmail}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              color: "#ffffff",
            }}
          >
            <input
              className={"emailInput"}
              name={"userEmail"}
              style={{
                all: "unset",
                borderBottom: "1px solid #9A9A9A",
                marginTop: "60px",
                textAlign: "center",
                fontSize: "20px",
              }}
              required
              type={"email"}
            ></input>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0 40px",
                marginTop: "9vh",
              }}
            >
              <button type={"submit"} style={{ all: "unset" }}>
                <img
                  src={"/img/common/submitBtn.svg"}
                  style={{
                    width: " 100%",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={"nextBtnWrap"}
        style={{
          display: "none",
          position: "absolute",
          bottom: "7vh",
          right: "7vh",
          zIndex: "10",
          gap: "0 2vh",
        }}
      >
        <img src={"/img/jeep/nextBtn-text.svg"} alt={"nextBtn"} />
        <img
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            if (commentFormWrap.style.display == "flex") {
              onBtnClick(commentFormWrap, emailFormWrap);
            } else if (commentFormWrap.style.display == "none") {
              emailFormWrap.style.display = "none";
              outTroWrap.style.display = "none";
              lastPage.style.display = "flex";
              nextBtnWrap.style.display = "none";
            }
          }}
          src={"/img/jeep/nextBtn.svg"}
        />
      </div>
      <div
        style={{
          display: "none",
          justifyContent: "center",
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100%",
          backgroundColor: "#ffffff",
        }}
        className={"lastPage"}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={thank}
            alt={"thank"}
            style={{
              height: "15vh",
            }}
          />
          <img
            src={"/img/jeep/lastBackBtn.svg"}
            alt={"lastBackBtn"}
            style={{
              marginTop: "15vh",
              height: "15vh",
              width: "100%",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default OutTro;
