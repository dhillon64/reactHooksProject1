import React, { useState } from "react";
import { Accordion } from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selection, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDropDown(!showDropDown)}>
        Show DropDown
      </button>
      {showDropDown ? (
        <Dropdown
          label="Select a Colour"
          selected={selection}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
