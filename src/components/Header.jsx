import "../styles/header.css";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import addressIcon from "../assets/location.svg";
import PersonalInfo from "./PersonalInfo";

export default function Header({ name, email, phone, address }) {
  return (
    <div className="header">
      <h1 className="fullname">{name}</h1>
      <div className="personal-infos">
        <PersonalInfo icon={emailIcon} info={email} />
        <PersonalInfo icon={phoneIcon} info={phone} />
        <PersonalInfo icon={addressIcon} info={address} />
      </div>
    </div>
  );
}
