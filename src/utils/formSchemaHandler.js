// Save schema to a file
export const saveSchemaToFile = (formSchema) => {
    const jsonData = JSON.stringify(formSchema, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "form-schema.json";
    link.click();
  };
  
  // Load schema from local storage
  export const loadSchemaFromLocalStorage = () => {
    const jsonData = localStorage.getItem("formSchema");
    return jsonData ? JSON.parse(jsonData) : [];
  };
  