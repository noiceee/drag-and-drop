import Checkbox from "./checkbox/Checkbox";
import TextArea from "./textArea/textArea";
import TextInput from "./textInput/TextInput";
import Toggle from "./toggle/Toggle";

export const typeMap = {
    "checkbox" : Checkbox,
    "input": TextInput,
    "textarea": TextArea,
    "toggle": Toggle
}

export const customElements = [
    Checkbox,
    TextInput,
    TextArea,
    Toggle
];

export default customElements;