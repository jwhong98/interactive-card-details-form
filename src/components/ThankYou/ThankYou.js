import React from "react";
import classes from "./ThankYou.module.css";
import complete from "../../images/icon-complete.svg";

const ThankYou = (props) => {
  return (
    <div className={classes.thankYou}>
      <img src={complete} alt="checkmark" />
      <h2>THANK YOU!</h2>
      <p className={classes.message}>We've added your card details</p>
      <button onClick={() => props.resetForm()}>Continue</button>
    </div>
  );
};

export default ThankYou;
