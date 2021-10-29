import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "It is a JavaScript library",
  },
  {
    title: "Why is react awesome",
    content: "because it uses jsx and babel",
  },
  {
    title: "how to use react",
    content: "use react by creating components",
  },
];

const options = [
  {
    label: "The Color Green",
    color: "green",
  },
  {
    label: "The Color Red",
    color: "red",
  },
  {
    label: "The Color Blue",
    color: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <Dropdown
        options={options}
        onSelectedChange={setSelected}
        selected={selected}
      />
    </div>
  );
};

export default App;
