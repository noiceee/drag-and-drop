import React from "react";
import { useDrag } from "react-dnd";
// import "./Checkbox.scss";

const TextArea = ({
    mode = "design",
    id = "default-id",
    label = "Default Label",
    value = "",
    placeholder = "Enter text here"
  }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FORM_ELEMENT",
    item: { type: "textarea", label: "Text Area" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    mode === "run" ? (
    <div className="textarea-run">
      <label for={id}>{label}</label>
      <input id={id} type="textarea" placeholder={placeholder} label = {label}/>
    </div>
    ) : ( 
    <div ref={drag} className={`draggable ${isDragging ? "dragging" : ""}`}>
      TextArea
    </div>
    )
  );
};

export default TextArea;
