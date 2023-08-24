import "../styles/personal-info.css";

export default function PersonalInfo({ icon, info }) {
  return (
    <div className="info-box">
      {info !== "" ? <img src={icon} className="info-icon" alt="icon" /> : null}
      <p className="info">{info}</p>
    </div>
  );
}
