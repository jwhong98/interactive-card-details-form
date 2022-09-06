import React, { useState } from "react";
import Form from "../Form/Form";
import logo from "../../images/card-logo.svg";
import classes from "./Main.module.css";
import ThankYou from "../ThankYou/ThankYou";

const Main = () => {
  const [submitted, setSubmitted] = useState(false);
  const [cvc, setCvc] = useState("000");
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("jane appleseed");
  const [date, setDate] = useState("00/00");

  const resetForm = () => {
    setCvc("000");
    setCardNum("0000 0000 0000 0000");
    setName("jane appleseed");
    setDate("00/00");
    setSubmitted(false);
  };
  return (
    <main>
      <header>
        <div className={classes.cardContainer}>
          <div className={classes.cardBack}>
            <p className={classes.cvc}>{cvc}</p>
          </div>
          <div className={classes.cardFront}>
            <img className={classes.cardLogo} src={logo} alt="" />
            <div className={classes.cardFrontInfo}>
              <p className={classes.cardNum}>{cardNum}</p>
              <div className={classes.sub}>
                <p className={classes.cardName}>{name}</p>
                <p className={classes.cardExp}>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {submitted ? (
        <ThankYou setSubmitted={setSubmitted} resetForm={resetForm} />
      ) : (
        <Form
          setSubmitted={setSubmitted}
          setCvc={setCvc}
          setCardNum={setCardNum}
          setName={setName}
          setDate={setDate}
        />
      )}
    </main>
  );
};

export default Main;
