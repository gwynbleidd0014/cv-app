import "../styles/header.css";
import Name from "./name";
import Image from "./image";
import Info from "./info";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Date from "../assets/date.svg";

export default function Header({ isEditable }) {
  return (
    <div className="header">
      <div className="header-main header-section">
        <Name isEditable={isEditable} />
        <Image isEditable={isEditable} />
      </div>
      <div className="header-info-bar header-section">
        <Info
          source={Email}
          alt="email icon"
          infoText="Email address"
          isEditable={isEditable}
        />
        <Info
          source={Phone}
          alt="phone icon"
          infoText="Phone number"
          isEditable={isEditable}
        />
        <Info
          source={Date}
          alt="birth Date"
          infoText="Birth date"
          isEditable={isEditable}
        />
      </div>
    </div>
  );
}
