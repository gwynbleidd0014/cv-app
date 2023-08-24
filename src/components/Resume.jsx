import "../styles/resume.css";
import Header from "./Header";

export default function Resume({ personalDetails }) {
  return (
    <div className="resume">
      <Header {...personalDetails} />
      {/* <Body /> */}
    </div>
  );
}
