import "../styles/builder.css";
import Button from "./Button";
import PersonalDetailConfigurator from "./PersonalDetailConifgurator";

export default function Builder({
  handleExampleLoadClick,
  handleClearResumeClick,
  handleChange,
  personalDetails,
}) {
  return (
    <div className="builder">
      <div className="builder-buttons">
        <Button
          className="clear-resume"
          handleClick={handleClearResumeClick}
          text="Clear Resume"
        />
        <Button
          className="load-example"
          handleClick={handleExampleLoadClick}
          text="Load Example"
        />
      </div>
      <PersonalDetailConfigurator
        handleChange={handleChange}
        personalDetails={personalDetails}
      />
    </div>
  );
}
