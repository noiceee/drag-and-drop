import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import "../styles/FormBuilder.scss";
import customElements from "./formElements/exportElements";
import Configurator from "./Configurator";

const FormBuilder = () => {
  const [formSchema, setFormSchema] = useState(JSON.parse(localStorage.getItem('schema') || []));
	const [selected, setSelected] = useState(false);

	// useEffect(()=>{
	// 	const schemaJSON = JSON.parse(localStorage.getItem('schema') || []);
	// 	setFormSchema(schemaJSON);
	// 	console.log(localStorage.getItem("schema"));
	// }, [])

  return (
    <div className="form-builder">
      <div className="sidebar">
        <h3>Drag Elements</h3>
        <div className="elements-container">
						{/* {customElements.map((e)=>e)} */}
						{customElements.map((ele, index) => {
								const Element = ele;
								console.log(ele.placeholder);
								return Element ? <Element key={index} label={ele.label} placeholder={ele.placeholder} mode="design" /> : null;
						})}
        </div>
      </div>
      <Canvas formSchema={formSchema} setFormSchema={setFormSchema} selected={selected} setSelected={setSelected}/>
			<Configurator formSchema={formSchema} setFormSchema={setFormSchema} selected={selected}/>
    </div>
  );
};

export default FormBuilder;
