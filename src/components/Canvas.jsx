import React, { useEffect } from "react";
import { useDrop } from "react-dnd";
import DraggableFormItem from "./formElements/DraggableFormItem";
import "../styles/Canvas.scss";

const Canvas = ({ formSchema, setFormSchema }) => {

  const [, drop] = useDrop({
    accept: "FORM_ELEMENT",
    drop: (item, monitor) => {
			// const dropPosition = monitor.getClientOffset();
			// const canvasRect = monitor.getSourceClientOffset();			
			// console.log("Dropped item:", item);
			// console.log("Drop Position (Client Offset):", dropPosition);
			// console.log("Canvas Position (Source Offset):", canvasRect);
      addElementToSchema(item, monitor);
    },
  });

	useEffect(()=>{
		localStorage.setItem('schema', JSON.stringify(formSchema));
	}, [formSchema])

  const addElementToSchema = (item, monitor) => {
    console.log(item);
    setFormSchema((prevSchema) => {
        if(item.id){
					const dropPosition = monitor.getClientOffset();
					if (dropPosition && monitor.isOver()) {
						const canvasRect = document.getElementById('canvas').getBoundingClientRect();
						const yOffset = dropPosition.y - canvasRect.top;
		
						console.log("Drop Position (Y Offset):", yOffset);
		
						// Logic to rearrange based on drop offset
						let targetIndex = formSchema.length;
						for (let i = 0; i < formSchema.length; i++) {
							const elementRect = document
								.getElementById(formSchema[i].id)
								?.getBoundingClientRect();
		
							if (elementRect && yOffset < elementRect.top + elementRect.height/2) {
								targetIndex = i;
								break;
							}
						}
						console.log("Target Drop Index:", targetIndex);
						console.log(item);
						return moveElementToPosition(item, targetIndex, prevSchema);
					}
        } else {
            return [
                ...prevSchema,
                {
                    ...item,
                    id: Date.now(),
                    label: item.label || "Default Label",
                    placeholder: item.placeholder || "",
                    value: "",
                },
            ]}
      });
  };

	const moveElementToPosition = (item, targetIndex, prevSchema) => {
		const updatedSchema = [...prevSchema];
		console.log(item);
		const [draggedItem] = updatedSchema.splice(item.index, 1);
		updatedSchema.splice(targetIndex, 0, draggedItem);
		return updatedSchema;
  };

  return (
    <div ref={drop} className="canvas" id="canvas">
      {formSchema.map((element, index) => (
        <DraggableFormItem
          key={index}
          index={index}
          type={element.type}
          id={element.id}
          label={element.label}
          setFormSchema={setFormSchema}
        />
      ))}
    </div>
  );
};

export default Canvas;
