import React, { Component } from "react";
import axios from "axios";
import Bgvideo from "./bgvideo";
import classes from "./weather.module.css";
import loadingImg from "./loading.gif";
import InnerForecastTab from "./innerForecastTab";
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      data: "",
      unit: "C",
      error: "",
      loading: 0,
      forecastArr: [],
      dateArr: []
    };
    console.log(InnerForecastTab);
  }
  handleCityChange = e => {
    this.setState({ city: e.target.value, data: "", error: "" }, () => {
      console.log(this.state.city);
    });
  };
  handleClick = () => {
    this.setState({ loading: 1 });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=1559cd6fa80fdc2f7acd52f4eba147ce`
      )
      .then(res => {
        console.log(res);
        this.setState({ data: res.data, loading: 0 });
      })
      .catch(err => {
        this.setState({ error: "Not found", loading: 0 });
      });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=1559cd6fa80fdc2f7acd52f4eba147ce`
      )
      .then(res => {
        console.log("here");
        let multiarr = [];
        // let arr = [];
        res = res.data;
        // console.log(res.list[0].dt_txt);
        for (let i = 0; i < res.list.length; i++) {
          let arr = [];
          // arr.push()
          while (
            i + 1 < res.list.length &&
            res.list[i].dt_txt.split(" ")[0] ===
              res.list[i + 1].dt_txt.split(" ")[0]
          ) {
            arr.push(res.list[i]);
            i++;
          }
          arr.push(res.list[i]);
          // i++;
          // if (i = res.list.length - 1) {
          //   arr.push(res.list[i]);
          // }
          console.log(arr);
          multiarr.push(arr);
        }
        console.log(multiarr);
        let forecastArr = [];
        let arr = [];
        let dateArr = [];
        for (let i = 0; i < multiarr.length; i++) {
          dateArr.push(multiarr[i][0].dt_txt.split(" ")[0]);
        }
        arr = multiarr[0].map(data => {
          return (
            <InnerForecastTab
              temp={
                this.state.unit == "C"
                  ? (data.main.temp - 273.15).toFixed(1)
                  : data.main.temp.toFixed(1)
              }
              time={data.dt_txt.split(" ")[1]}
              unit={this.state.unit}
              data={data}
            ></InnerForecastTab>
          );
        });
        forecastArr.push(arr);
        arr = multiarr[1].map(data => {
          return (
            <InnerForecastTab
              temp={
                this.state.unit == "C"
                  ? (data.main.temp - 273.15).toFixed(1)
                  : data.main.temp.toFixed(1)
              }
              time={data.dt_txt.split(" ")[1]}
              unit={this.state.unit}
              data={data}
            ></InnerForecastTab>
          );
        });
        forecastArr.push(arr);
        arr = multiarr[2].map(data => {
          return (
            <InnerForecastTab
              temp={
                this.state.unit == "C"
                  ? (data.main.temp - 273.15).toFixed(1)
                  : data.main.temp.toFixed(1)
              }
              time={data.dt_txt.split(" ")[1]}
              unit={this.state.unit}
              data={data}
            ></InnerForecastTab>
          );
        });
        forecastArr.push(arr);
        arr = multiarr[3].map(data => {
          return (
            <InnerForecastTab
              temp={
                this.state.unit == "C"
                  ? (data.main.temp - 273.15).toFixed(1)
                  : data.main.temp.toFixed(1)
              }
              time={data.dt_txt.split(" ")[1]}
              unit={this.state.unit}
              data={data}
            ></InnerForecastTab>
          );
        });
        forecastArr.push(arr);
        this.setState({ forecastArr: forecastArr, dateArr: dateArr });
      });
  };
  getDataByLocation = () => {
    // navigator.geolocation.getCurrentPosition();
    navigator.geolocation.getCurrentPosition(position => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1559cd6fa80fdc2f7acd52f4eba147ce`
        )
        .then(res => {
          console.log(res);
          this.setState({ data: res.data });
        });
    });
  };
  changeUnit = () => {
    this.setState({ unit: this.state.unit === "C" ? "K" : "C" });
  };
  render() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.bgvideo}>
          <Bgvideo
            name={
              // "d30"
              this.state.data == ""
                ? "def"
                : this.state.data.weather[0].icon
                    .split("")
                    .reverse()
                    .join("")
            }
          ></Bgvideo>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.inputDiv}>
            <input
              className={classes.inputBox}
              value={this.state.city}
              onChange={e => {
                this.handleCityChange(e);
              }}
              placeholder="City"
              // onKeyDown={this.handleClick}
            ></input>
            <h1>
              <button className={classes.button} onClick={this.handleClick}>
                {this.state.loading == 0 ? (
                  "Search"
                ) : (
                  <img src={loadingImg} className={classes.loading}></img>
                )}
              </button>
              {/* <button
                className={classes.button}
                onClick={this.getDataByLocation}
              >
                find me
              </button> */}
              {/* <button className={classes.button} onClick={this.changeUnit}>
                {this.state.unit == "C" ? "K" : "C"}
              </button> */}
            </h1>
          </div>
          {this.state.data != "" ? (
            <div>
              <div className={classes.todayData}>
                <h1 style={{ fontSize: "50px" }}>
                  {this.state.data == ""
                    ? ""
                    : this.state.unit === "C"
                    ? (this.state.data.main.temp - 273.15).toFixed(1)
                    : this.state.data.main.temp.toFixed(1)}
                  &deg;{this.state.unit}
                </h1>
                <h2>
                  {this.state.data == "" ? "" : this.state.data.weather[0].main}{" "}
                  | {this.state.data.main.humidity}% humid |{" "}
                  {this.state.data.wind.speed}km/hr
                </h2>
                {/* {this.state.data.weather[0].icon
                .split("")
                .reverse()
                .join("")} */}
              </div>
              <div className={classes.forecastDiv}>
                <div className={classes.forecastTab}>
                  <div className={classes.date}>
                    {this.state.dateArr[1]
                      ? this.state.dateArr[1]
                          .split("-")
                          .reverse()
                          .join("-")
                      : ""}
                  </div>
                  {this.state.forecastArr[1]}
                </div>
                <div className={classes.forecastTab}>
                  <div className={classes.date}>
                    {this.state.dateArr[2]
                      ? this.state.dateArr[2]
                          .split("-")
                          .reverse()
                          .join("-")
                      : ""}
                  </div>
                  {this.state.forecastArr[2]}
                </div>
                <div className={classes.forecastTab}>
                  <div className={classes.date}>
                    {this.state.dateArr[3]
                      ? this.state.dateArr[3]
                          .split("-")
                          .reverse()
                          .join("-")
                      : ""}
                  </div>
                  {this.state.forecastArr[3]}
                </div>
              </div>
            </div>
          ) : (
            this.state.error
          )}
        </div>
      </div>
    );
  }
}
export default Weather;
