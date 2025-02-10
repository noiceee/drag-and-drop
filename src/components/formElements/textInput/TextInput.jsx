import React from "react";
import { useDrag } from "react-dnd";
import "./TextInput.scss";


const TextInput = ({
  mode = "design",
  id = "default-id",
  label = "Default Label",
  value = "",
  placeholder = "Enter text here"
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FORM_ELEMENT",
    item: { type: "input", label: "Text Input" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    mode === "run" ? (
    <div className="textinput-run form__group field">
      <input id={id} type="text" placeholder={placeholder} label = {label} className="form__field"/>
      <label for={id} className="form__label">{label}</label>
    </div>
    ) : ( 
    <div ref={drag} className={`draggable ${isDragging ? "dragging" : ""}`}>
      Text Input
    </div>
    )
  );
};

export default TextInput;
