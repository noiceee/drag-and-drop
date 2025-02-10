import React, { useState } from "react";
import { useDrag } from "react-dnd";
import "../../styles/DraggableFormItem.scss";

const FormElementDraggable = ({ label, type, id, index, setFormSchema}) => {
  const [hovered, setHovered] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => {
    console.log(index);
    return {
    type: "FORM_ELEMENT",
    item: { type, id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }});

  const handleDeleteClick = () => {
    setFormSchema((prev)=>{
      return prev.filter((ele)=>ele.id !== id);
    });
  };

  return (
    <>
      <div className="element-border"></div>
      <div
        id={id}
        ref={drag}
        className={`draggable-element ${isDragging ? "draggable-element--dragging" : ""} ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        {label}
        <button className="delete" onClick={handleDeleteClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><rect width="16" height="16" x="0.536" fill="#fff" rx="3" styleName="mix-blend-mode: multiply;"></rect><path fill="#fff" d="M0 0h16v16H0z" transform="translate(.536)" styleName="mix-blend-mode: multiply;"></path><path fill="currentcolor" d="M7.536 6h-1v6h1zm3 0h-1v6h1z"></path><path fill="currentcolor" d="M2.536 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3zm2 11V4h8v10zm6-13h-4v1h4z"></path></svg>
        </button>
      </div>
    </>
  );
};

export default FormElementDraggable;
