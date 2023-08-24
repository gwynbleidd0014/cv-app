import "../styles/app.css";
import Resume from "./Resume";
import { useState } from "react";
import Builder from "./Builder";

const example = {
  personalDetails: {
    name: "Ucha Omiadze",
    email: "Uchaomiadze99@gmail.com",
    phone: "+995 597 87 43 12",
    address: "Georgia, Tbilisi",
  },
  educations: [
    {
      school: "Tbilisi State University",
      degree: "Bachelor",
      startDate: "2016/09/01",
      endDate: "2020/09/02",
      location: "Georgia, Tbilisi",
    },
  ],
};

export default function App() {
  const [personalDetails, setPersonalDetails] = useState(
    example.personalDetails
  );

  const [educations, setEducations] = useState(example.educations);

  const handleEducationsChange = (e) => {
    const newEducation = educations[parseInt(e.target.dataset.id)];
    newEducation[e.target.dataset.key] = e.target.value;
    const newEducations = [...educations];
    educations.push(newEducation);
    setEducations(newEducations);
  };

  const handlePersonalDetailsChange = (e) => {
    const key = e.target.dataset.key;
    console.log(key);
    const newDetails = { ...personalDetails };
    newDetails[key] = e.target.value;
    setPersonalDetails(newDetails);
  };

  const handleLoadExampleClick = () => {
    setPersonalDetails(example.personalDetails);
  };

  const handleClearResumeClick = () => {
    setPersonalDetails({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };
  return (
    <div className="app">
      <Builder
        handleExampleLoadClick={handleLoadExampleClick}
        handleClearResumeClick={handleClearResumeClick}
        handleChange={handlePersonalDetailsChange}
        personalDetails={personalDetails}
      />
      <Resume personalDetails={personalDetails} />
    </div>
  );
}
