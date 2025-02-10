import React from "react";
import { useDrag } from "react-dnd";
import "./Checkbox.scss";

const Checkbox = ({
  mode = "design",
  id = "default-id",
  label = "Default Label",
  value = "",
  placeholder = "Enter text here"
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FORM_ELEMENT",
    item: { type: "checkbox", label: "CheckBox" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    mode === "run" ? (
    <div className="checkbox-run">
      <input type="checkbox" id={id}/>
      <label for={id}>{label}</label>
    </div>
    ) : ( 
    <div ref={drag} className={`draggable ${isDragging ? "dragging" : ""}`}>
      Checkbox
    </div>
    )
  );
};

export default Checkbox;
