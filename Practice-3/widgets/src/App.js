import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          title="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
};

export default App;
