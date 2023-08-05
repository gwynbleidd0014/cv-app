import "../styles/name.css";
import { useState } from "react";

export default function Name({ isEditable }) {
  const [name, setName] = useState("Name");

  function handleChange(e) {
    setName(e.target.value);
  }

  if (isEditable) {
    return <input className="name" onChange={handleChange} value={name} />;
  } else {
    return <p className="name">{name}</p>;
  }
}
