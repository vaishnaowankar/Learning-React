import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Example of changing the greeting text according to current time.
const cssStyle = {};

let greetingText = "";

let currDate = new Date();
let currHour = currDate.getHours();

if (currHour >= 0 && currHour <= 11) {
  greetingText = "Good Morning";
  cssStyle.color = "green"; // adding a key value pair to object and manipulating accordingly
} else if (currHour >= 12 && currHour <= 19) {
  greetingText = "Good Evening";
  cssStyle.color = "orange";
} else {
  greetingText = "Good Night";
  cssStyle.color = "violet";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // Following is a React.Fragment way of rendering multiple elements , just use the starting and ending tags and put the elements in between them
  <>
    <div>
      <h1>
        Hello Sir , <span style={cssStyle}>{greetingText}</span>{" "}
      </h1>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
