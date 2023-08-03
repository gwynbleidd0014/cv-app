import "../styles/header.css";
import Name from "./name";
import Image from "./image";
import Info from "./info";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Date from "../assets/date.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-main header-section">
        <Name />
        <Image />
      </div>
      <div className="header-info-bar header-section">
        <Info source={Email} alt="email icon" infoText="Email address" />
        <Info source={Phone} alt="phone icon" infoText="Phone number" />
        <Info source={Date} alt="birth Date" infoText="Birth date" />
      </div>
    </div>
  );
}
