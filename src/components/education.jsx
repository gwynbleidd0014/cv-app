import "../styles/education.css";
import BluePrint from "./blueprint";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Education({ isEditable }) {
  const [educations, setEducations] = useState([]);

  function hanldeEducation() {
    setEducations([
      ...educations,
      {
        id: uuid(),
        heading: "Place of Education",
        description: "Education description",
      },
    ]);
  }

  return (
    <div className="education">
      <h2 className="education-heading">EDUCATION</h2>
      {educations.map(({ heading, description, id }) => {
        return (
          <BluePrint
            heading={heading}
            description={description}
            key={id}
            isEditable={isEditable}
          />
        );
      })}
      <button className="add-education" onClick={hanldeEducation}>
        Add Education
      </button>
    </div>
  );
}
