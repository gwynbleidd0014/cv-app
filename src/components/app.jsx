import "../styles/app.css";
import Header from "./header";
import Body from "./body";
import { useState } from "react";
import Edit from "./edit";

export default function App() {
  const [isEditable, setIsEditable] = useState(true);

  function handleClick() {
    setIsEditable(!isEditable);
  }
  return (
    <div className="app">
      <Edit isEditable={isEditable} handleClick={handleClick} />
      <Header isEditable={isEditable} handleClick={handleClick} />
      <Body isEditable={isEditable} />
    </div>
  );
}
