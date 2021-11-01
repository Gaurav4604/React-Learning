import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      else setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    // cleanup func
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = props.options.map((option) => {
    if (option === props.selected) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => props.onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a {props.title}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>

      <p
        style={{
          color: props.selected.value,
        }}
      >
        This text is {props.selected.value}
      </p>
    </div>
  );
};

export default Dropdown;
