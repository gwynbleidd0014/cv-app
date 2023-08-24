import "../styles/configurator-field.css";

export default function ConfiguratorField({
  title,
  handleChange,
  keyName,
  value,
}) {
  return (
    <div className="configurator-field">
      <h2>{title}</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={`Ender ${title}`}
        data-key={keyName}
      />
    </div>
  );
}
