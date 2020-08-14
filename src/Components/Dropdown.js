import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      } else {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

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

  const selectedColorText = () => {
    if (selected.value === "red") {
      return <p style={{ color: "red" }}>This text is Red</p>;
    } else if (selected.value === "green") {
      return <p style={{ color: "green" }}>This text is Green</p>;
    } else {
      return <p style={{ color: "blue" }}>This text is blue</p>;
    }
  };

  const isOpen = open ? "visible active" : "";
  const isOpen1 = open ? "visible transition" : "";

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
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
      <br />
      {selectedColorText()}
    </div>
  );
};

export default Dropdown;
