import React from "react";

function App() {
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

  return (
    // Following is a React.Fragment way of rendering multiple elements , just use the starting and ending tags and put the elements in between them
    <>
      <div>
        <h1>
          Hello Sir , <span style={cssStyle}>{greetingText}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
