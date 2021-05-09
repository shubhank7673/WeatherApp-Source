import React from "react";
import classes from "./weather.module.css";
const innerForecastTab = props => {
  console.log("props", props);
  return (
    <div className={classes.innerForecastTab}>
      {/* <div>{props.data.dt_txt.split(" ")[0]}</div> */}
      <div>{props.time}</div>
      <div>{props.unit == "K" ? props.temp + "K" : props.temp + "C"}</div>
      <div>{props.data.weather[0].main}</div>
      <img
        src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
      ></img>
    </div>
  );
};
export default innerForecastTab;
