import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import "../styles/FormBuilder.scss";
import customElements from "./formElements/exportElements";

const FormBuilder = () => {
  const [formSchema, setFormSchema] = useState(JSON.parse(localStorage.getItem('schema') || []));

	// useEffect(()=>{
	// 	const schemaJSON = JSON.parse(localStorage.getItem('schema') || []);
	// 	setFormSchema(schemaJSON);
	// 	console.log(localStorage.getItem("schema"));
	// }, [])

  const addElementToSchema = (element) => {
    setFormSchema((prevSchema) => [
      ...prevSchema,
      { ...element, id: Date.now(), value: "" },
    ]);
  };

  return (
    <div className="form-builder">
      <div className="sidebar">
        <h3>Drag Elements</h3>
        <div className="elements-container">
						{customElements.map((e)=>e)}
        </div>
      </div>
      <Canvas formSchema={formSchema} setFormSchema={setFormSchema} />
    </div>
  );
};

export default FormBuilder;
