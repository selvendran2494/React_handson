# Commands used 

npm init
npm i -D parcel
npx parcel index.html

npm i react
npm i react-dom

npx parcel build index.html


import React from "react"
import ReactDOM from "react-dom/client"

React.CreateElement()
ReactDOM.createRoot()
root.render()


import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const reactElement = <h1>This is React Element</h1>;

// React Component with return
const ReactComponent = () => {
  return <h1>This is return ReactComponent</h1>;
};

// React Component without return
const ReactComponentConvention = () => <h1>This is without return</h1>;

//Component Composition
const ReactComponentComposition = () => (
  <div id="container">
    <ReactComponent />
    <ReactComponentConvention />
    <h1>This is Component Composition</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponentComposition />);
