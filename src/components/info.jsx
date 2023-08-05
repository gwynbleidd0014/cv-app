import "../styles/info.css";
import { useState } from "react";

export default function Info({ source, alt, infoText, isEditable }) {
  const initialText = infoText;

  const [text, setText] = useState(initialText);

  function handleChange(e) {
    setText(e.target.value);
  }

  if (isEditable) {
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
  } else {
    return (
      <div className="info">
        <img src={source} alt={alt} className="info-icon" />
        <p type="text" className="info-text">
          {text}
        </p>
      </div>
    );
  }
}
