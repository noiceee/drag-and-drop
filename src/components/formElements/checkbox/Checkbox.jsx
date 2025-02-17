import React from "react";
import { useDrag } from "react-dnd";
import "./Checkbox.scss";
import { IonButton, IonCheckbox } from "@ionic/react";

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
      {/* <input type="checkbox" id={id}/>
      <label for={id}>{label}</label> */}
      <IonCheckbox id={id} labelPlacement="end">{label}</IonCheckbox>
    </div>
    ) : ( 
    <div ref={drag} className={`draggable ${isDragging ? "dragging" : ""}`}>
      Checkbox
    </div>
    )
  );
};

export default Checkbox;
