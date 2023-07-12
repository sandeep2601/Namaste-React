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
