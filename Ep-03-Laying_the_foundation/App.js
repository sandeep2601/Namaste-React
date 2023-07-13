import React from "react";
// Earlier ReactDOM was imported from "react-dom", but now it gives Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
// So, to remove the warning we need to import it from "react-dom/client"
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS Engine) - Parcel - Babel
// JSX => React.createElement => ReactElement (JS Object) => HTMLElement(render)

// React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

// React Functional Component
const TitleComponent = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {/* Component Composition => Using a react compoenet into another react component */}
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
// render only accept react element as argument, so in case of react component,
// we need to wrap it in angular brackets, or if it is an functional component,
// then can be used with ().
// root.render(HeadingComponent());
root.render(<HeadingComponent />);
