import React from "react";
// Earlier ReactDOM was imported from "react-dom", but now it gives Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
// So, to remove the warning we need to import it from "react-dom/client"
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", demo: "abc" },
  "Hello World from React!!"
);

{
  /* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
    </div>
</div> */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm a h1 tag")
  )
);

{
  /* <div id="parent">
      <div id="child">
          <h1>I'm a h1 tag</h1>
          <h2>I'm a h2 tag</h2>
      </div>
  </div> */
}
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ])
);

{
  /* <div id="parent">
      <div id="child1">
          <h1>I'm a h1 tag</h1>
          <h2>I'm a h2 tag</h2>
      </div>
      <div id="child2">
          <h1>I'm a h1 tag</h1>
          <h2>I'm a h2 tag</h2>
      </div>
  </div> */
}
const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);
