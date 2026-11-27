import React, { useState } from "react";
import FormComponent from "./FormComponent";
import "./App.css";

function App(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <FormComponent
      handleChange={handleChange}
      data={formData}
      {...props}
    />
  );
}

export default App;