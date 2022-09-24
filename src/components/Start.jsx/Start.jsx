import classes from "./Start.module.css";

const Start = (props) => {
  return (
    <div className={classes.start}>
      <div className={classes["play"]}>
        <h2>Click Start to</h2>
        <h1>play</h1>
      </div>
      <div className={classes.button}>
        <button onClick={props.onClick} className={classes["start-button"]}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
