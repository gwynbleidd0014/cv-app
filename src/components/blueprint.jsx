import "../styles/blueprint.css";
import { useState } from "react";

export default function BluePrint({ heading, description, isEditable }) {
  const [details, setDetails] = useState({
    heading,
    description,
    from: "",
    to: "",
  });

  function handleChange(e) {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  }

  if (isEditable) {
    return (
      <div className="blueprint">
        <input
          type="text"
          id="heading"
          className="heading"
          value={details.heading}
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          className="description"
          value={details.description}
          onChange={handleChange}
        />

        <div className="from-to">
          <input
            type="date"
            id="from"
            className="date-input from"
            value={details.from}
            onChange={handleChange}
          ></input>
          {`   -   `}
          <input
            type="date"
            id="to"
            className="date-input to"
            value={details.to}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="blueprint">
        <p className="heading"> {details.heading}</p>
        <p className="description"> {details.description}</p>

        <div className="from-to">
          <p className="date"> {details.from}</p>
          {`   -   `}
          <p className="date"> {details.to}</p>
        </div>
      </div>
    );
  }
}
