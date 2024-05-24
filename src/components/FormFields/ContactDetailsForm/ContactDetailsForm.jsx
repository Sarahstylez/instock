import "./ContactDetailsForm.scss";
import { useState } from "react";

const ContactDetailsForm = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });

  const [activeField, setActiveField] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  };

  const handleFocus = (name) => {
    setActiveField(name);
  };

  const handleBlur = (name) => {
    setActiveField(null);
    validateInput(name, formData[name]);
  };

  const validateInput = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = !emailPattern.test(value) ? "Invalid email address" : "";
    } else if (name === "phoneNumber") {
      const phonePattern = /^[0-9]{10}$/; // Example pattern: 10 digits
      error = !phonePattern.test(value) ? "Invalid phone number" : "";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        valid = false;
      } else {
        validateInput(key, formData[key]);
        if (errors[key]) {
          valid = false;
        }
      }
    });

    setErrors(newErrors);

    if (valid) {
      // Handle form submission logic here
      console.log(formData);
    }
  };

  return (
    <div className="form-contact">
      <h2 className="form-contact__title">Contact Details</h2>
      <form onSubmit={handleSubmit}>
        {["contactName", "position", "phoneNumber", "email"].map((field) => (
          <div key={field}>
            <label htmlFor={field}>
              <h3>
                {field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                :
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
              placeholder={field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              required
            />
            {errors[field] && (
              <div className="error-message">{errors[field]}</div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ContactDetailsForm;
