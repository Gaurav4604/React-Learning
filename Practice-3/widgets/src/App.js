import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
    value: "green",
  },
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      {/* <Dropdown
      title={"Color"}
        options={options}
        onSelectedChange={setSelected}
        selected={selected}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
