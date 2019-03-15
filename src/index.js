//import the react and ReactDom libraries
import React from "react"; //React hocce variable er name.. react dependancy theke sob kusi React var e store hocce
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  let clickObj = { text: "click me" };
  let labelText = "Enter name : ";
  return (
    <div>
      <label class="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {clickObj.text}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
