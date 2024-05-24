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
    } else {
      switch (name) {
        case "contact_email":
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          error = !emailPattern.test(value) ? "Valid email is required" : "";
          break;
        case "contact_phone":
          const phonePattern = /^[0-9]+$/;
          error = !phonePattern.test(value)
            ? "Valid phone number is required"
            : "";
          break;
        // Add more specific validation cases if needed
        default:
          break;
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to cancel?")) {
      navigate("/warehouses");
    }
  };

  const handleAddClick = async (e) => {
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
        try {
          const response = await fetch("http://localhost:8080/api/warehouses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log("Form submitted successfully:", data);

          navigate("/warehouses");
        } catch (error) {
          console.error("There was an issue with the form submission:", error);
        }
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
