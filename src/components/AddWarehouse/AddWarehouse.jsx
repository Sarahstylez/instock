import "./AddWarehouse.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../FormFields/WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../FormFields/ContactDetailsForm/ContactDetailsForm";

function AddWarehouse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
    created_at: "",
    updated_at: "",
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
    } else if (name === "contact_email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = !emailPattern.test(value) ? "Invalid email address" : "";
    } else if (name === "contact_phone") {
      const phonePattern = /^[0-9]{10}$/; // Example pattern: 10 digits
      error = !phonePattern.test(value) ? "Invalid phone number" : "";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to cancel?")) {
      navigate("/warehouses");
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (window.confirm("Are you ready to submit?")) {
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
        console.log("Submitting form data:", formData);
        // Add logic to submit form data
      }
    }
  };

  return (
    <section className="card">
      <div className="card__title">
        <div className="card__title-container">
          <Link className="backarrow__link" to="/warehouses">
            <img
              className="card__icon-arrow"
              src={BackArrow}
              alt="Back to Warehouse List Page"
            />
          </Link>
          <h1>Add New Warehouse</h1>
        </div>
      </div>
      <div className="forms">
        <div className="forms__container">
          <WarehouseDetailsForm
            formData={formData}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            activeField={activeField}
            errors={errors}
          />
          <ContactDetailsForm
            formData={formData}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            activeField={activeField}
            errors={errors}
          />
        </div>
        <div className="form__ctas">
          <button
            className="form__ctas-cancel"
            type="button"
            onClick={handleCancelClick}
          >
            <h3>Cancel</h3>
          </button>
          <button
            className="form__ctas-add"
            type="button"
            onClick={handleAddClick}
          >
            <h3>+ Add Warehouse</h3>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddWarehouse;
