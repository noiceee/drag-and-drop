import { IonToggle } from "@ionic/react";
import React from "react";
import { useDrag } from "react-dnd";

const Toggle = ({
  mode = "design",
  id = "default-id",
  label = "Default Label",
  value = "",
  placeholder = "Enter text here"
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FORM_ELEMENT",
    item: { type: "toggle", label: "Toggle" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    mode === "run" ? (
    <div className="toggle-run">
      <IonToggle id={id}>{label}</IonToggle>
    </div>
    ) : ( 
    <div ref={drag} className={`draggable ${isDragging ? "dragging" : ""}`}>
      Toggle
    </div>
    )
  );
};

export default Toggle;
