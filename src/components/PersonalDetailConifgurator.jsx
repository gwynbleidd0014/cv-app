import "../styles/personal-detail-configurator.css";
import ConfiguratorField from "./ConfiguratorField";

export default function PersonalDetailConfigurator({
  handleChange,
  personalDetails,
}) {
  return (
    <div className="personal-detail-configurator">
      <ConfiguratorField
        title="Full name"
        handleChange={handleChange}
        keyName="name"
        value={personalDetails.name}
      />
      <ConfiguratorField
        title="Email"
        handleChange={handleChange}
        keyName="email"
        value={personalDetails.email}
      />
      <ConfiguratorField
        title="Phone number"
        handleChange={handleChange}
        keyName="phone"
        value={personalDetails.phone}
      />
      <ConfiguratorField
        title="Address"
        handleChange={handleChange}
        keyName="address"
        value={personalDetails.address}
      />
    </div>
  );
}
