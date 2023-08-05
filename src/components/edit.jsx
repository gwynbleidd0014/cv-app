import "../styles/edit.css";

export default function Edit({ isEditable, handleClick }) {
  return (
    <div className="interact">
      {isEditable ? (
        <button className="btn save-btn interact-btn" onClick={handleClick}>
          Save
        </button>
      ) : (
        <button className="btn edit-btn interact-btn" onClick={handleClick}>
          Edit
        </button>
      )}
    </div>
  );
}
