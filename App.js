const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React App"
);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I'm am an h2 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I am h2 tag"),
    React.createElement("h2", {}, "I'm am an h2 tag")
  ),
]);
const root = ReactDOM.render(parent, document.getElementById("root"));
root.render(parent);
