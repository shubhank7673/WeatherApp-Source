import React from "react";
import d10 from "./videos/d10.mp4";
import d20 from "./videos/d20.mp4";
import d30 from "./videos/d30.mp4";
import d40 from "./videos/d40.mp4";
import d90 from "./videos/d90.mp4";
import d01 from "./videos/d01.mp4";
import d11 from "./videos/d11.mp4";
import d31 from "./videos/d31.mp4";
import d05 from "./videos/d05.mp4";
import def from "./videos/default.mp4";
import n40 from "./videos/n40.mp4";
const map = {
  n40: n40,
  d01: d01,
  d10,
  d20,
  d30,
  d40,
  d90,
  d11,
  d31,
  d05,
  def,
};
function bgvideo(props) {
  return (
    // <img src={map[props.name]}></img>
    <video
      className="videoTag"
      styles={{ overflow: "hidden" }}
      autoPlay
      loop
      muted
      key={map[props.name]}
    >
      {/* src={n40} */}
      <source src={map[props.name]} type="video/mp4" />
    </video>
  );
}
export default bgvideo;
