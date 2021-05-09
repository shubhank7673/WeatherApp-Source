import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Weather from "./weather";
import bg from "./bg.jpg";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          `url(${bg})`
        // background: "black"
      }}
    >
      <Weather></Weather>
    </div>
  );
}

export default App;
