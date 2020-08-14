import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const isOpen = open ? "visible active" : "";
  const isOpen1 = open ? "visible transition" : "";

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${isOpen}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen1}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
