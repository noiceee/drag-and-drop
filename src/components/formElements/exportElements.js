import Checkbox from "./checkbox/Checkbox";
import TextArea from "./textArea/textArea";
import TextInput from "./textInput/TextInput";

export const typeMap = {
    "checkbox" : Checkbox,
    "input": TextInput,
    "textarea": TextArea
}

export const customElements = [
    <Checkbox mode="design"/>,
    <TextInput mode="design"/>,
    <TextArea mode="design"/>
];

export default customElements;