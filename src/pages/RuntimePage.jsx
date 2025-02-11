import { useState } from "react";
import FormBuilder from "../components/FormBuilder";
import { typeMap } from "../components/formElements/exportElements";
import "../styles/RuntimePage.scss";

const RuntimePage = () => {
    const [schema, setSchema] = useState(JSON.parse(localStorage.getItem('schema')) || []);
    return (
        <div className="runtime-page">
            {schema.map((ele, index) => {
                const Element = typeMap[ele.type];
                console.log(ele.label);
                return Element ? <Element key={index} label={ele.label} placeholder={ele.placeholder} mode="run" /> : null;
            })}
        </div>
    )
}

export default RuntimePage;