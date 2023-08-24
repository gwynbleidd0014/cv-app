import "../styles/button.css";

export default function Button({ className, handleClick, text }) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
