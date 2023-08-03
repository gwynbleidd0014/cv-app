import "../styles/blueprint.css";

export default function BluePrint({ heading, description }) {
  return (
    <div className="blueprint">
      <input type="text" className="heading" value={heading} />
      <input type="text" className="description" value={description} />

      <div className="from-to">
        <input type="date" className="date-input"></input>
        {`   -   `}
        <input type="date" className="date-input" />
      </div>
    </div>
  );
}
