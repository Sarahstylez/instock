import "./ContactDetailsForm.scss";
import ErrorIcon from "../../../assets/Icons/error-24px.svg";

const ContactDetailsForm = ({
  formData,
  handleChange,
  handleFocus,
  handleBlur,
  activeField,
  errors,
}) => {
  return (
    <div className="form-contact">
      <h2 className="form-contact__title">Contact Details</h2>
      {[
        "contact_name",
        "contact_position",
        "contact_phone",
        "contact_email",
      ].map((field) => (
        <div key={field}>
          <label htmlFor={field}>
            <h3>
              {field === "contact_name"
                ? "Contact Name"
                : field
                    .replace("contact_", "")
                    .replace(/_/g, " ")
                    .replace(/^./, (str) => str.toUpperCase())}
            </h3>
          </label>
          <input
            className={`form-contact__input ${
              activeField === field ? "active" : ""
            } ${errors[field] ? "error" : ""}`}
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            onFocus={() => handleFocus(field)}
            onBlur={() => handleBlur(field)}
            placeholder={
              field === "contact_name"
                ? "Contact Name"
                : field
                    .replace("contact_", "")
                    .replace(/_/g, " ")
                    .replace(/^./, (str) => str.toUpperCase())
            }
            required
          />
          {errors[field] && (
            <div className="error-message">
              <img src={ErrorIcon} alt="Error Icon" />
              {errors[field]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactDetailsForm;
