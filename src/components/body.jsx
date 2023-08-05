import "../styles/body.css";

import Education from "./education";

export default function Body(props) {
  return (
    <div className="body">
      <Education isEditable={props.isEditable} />
    </div>
  );
}
