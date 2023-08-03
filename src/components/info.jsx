import "../styles/info.css";
import { useState } from "react";

export default function Info({ source, alt, infoText }) {
  const initialText = infoText;

  const [text, setText] = useState(initialText);

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="info">
      <img src={source} alt={alt} className="info-icon" />
      <input
        type="text"
        className="info-text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
