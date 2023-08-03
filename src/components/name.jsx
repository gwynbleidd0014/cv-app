import "../styles/name.css";
import { useState } from "react";

export default function Name() {
  const [name, setName] = useState("Name");

  function handleChange(e) {
    setName(e.target.value);
  }

  return <input className="name" onChange={handleChange} value={name} />;
}
