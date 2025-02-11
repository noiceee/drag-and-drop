import React, { useEffect, useState } from "react";
import "../styles/Configurator.scss";
import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";

const Configurator = ({formSchema, setFormSchema, selected}) => {
	const selectedElement = formSchema.filter((ele)=>ele.id === selected)[0];
	const [label, setLabel] = useState(selectedElement?.label);
	const [value, setValue] = useState(selectedElement?.value);
	const [placeholder, setPlaceholder] = useState(selectedElement?.placeholder);

  useEffect(() => {
    if (selectedElement) {
      setLabel(selectedElement.label || "");
      setValue(selectedElement.value || "");
      setPlaceholder(selectedElement.placeholder || "");
    }
  }, [selectedElement]);

	const handleApply = ()=>{
		setFormSchema((schema)=>{
			console.log("IDHAR : ", schema);
			return schema.map((ele)=> ele.id === selected ? {...ele, label, value, placeholder} : ele);
		})
	}

  return (
    <div className="configurator">
      <div className="configurator-panel">
        <h3>Configure Props</h3>
        <IonList class="config-options">
            <IonItem className="option">
                <IonInput label="Label" labelPlacement="floating" disabled={!selected} fill="outline" value={label} onIonInput={(e)=>setLabel(e.target.value)}></IonInput>
            </IonItem>
            <IonItem className="option">
                <IonInput label="Value" labelPlacement="floating" disabled={!selected} fill="outline" value={value} onIonInput={(e)=>setValue(e.target.value)}></IonInput>
            </IonItem>
            <IonItem className="option">
                <IonInput label="Placeholder" labelPlacement="floating" disabled={!selected} fill="outline" value={placeholder} onIonInput={(e)=>setPlaceholder(e.target.value)}></IonInput>
            </IonItem>
        </IonList>
        <IonButton onClick={handleApply} disabled={!selected}>Apply</IonButton>
      </div>
    </div>
  );
};

export default Configurator;
