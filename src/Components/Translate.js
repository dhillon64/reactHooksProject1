import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [selection, setSelected] = useState(options[0]);

  return (
    <Dropdown
      label="Select a Language"
      options={options}
      selected={selection}
      onSelectedChange={setSelected}
    />
  );
};

export default Translate;
