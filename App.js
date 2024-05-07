const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi this is an h1 tag"),
    React.createElement("h2", {}, "Hi this is an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi this is an h1 tag"),
    React.createElement("h2", {}, "Hi this is an h2 tag"),
  ]),
]);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
