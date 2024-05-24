import "./WarehouseDetailsForm.scss";
import { useState } from "react";

const WarehouseDetailsForm = () => {
  const [formData, setFormData] = useState({
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
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
    <div className="form-warehouse">
      <h2 className="form-warehouse__title">Warehouse Details</h2>
      <form onSubmit={handleSubmit}>
        {["warehouseName", "streetAddress", "city", "country"].map((field) => (
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
              className={`form-warehouse__input ${
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

export default WarehouseDetailsForm;
