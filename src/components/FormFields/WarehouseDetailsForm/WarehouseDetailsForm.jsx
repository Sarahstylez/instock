import "./WarehouseDetailsForm.scss";
import { useState } from "react";

const WarehouseDetailsForm = () => {
  const [formData, setFormData] = useState({
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="form">
      <h2 className="form__title">Warehouse Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="warehouseName">
            <h3>Warehouse Name:</h3>
          </label>
          <input
            className="form__input"
            type="text"
            id="warehouseName"
            name="warehouseName"
            value={formData.warehouseName}
            onChange={handleChange}
            placeholder="Warehouse Name"
            required
          />
        </div>
        <div>
          <label htmlFor="streetAddress">
            <h3>Street Address:</h3>
          </label>
          <input
            className="form__input"
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            required
          />
        </div>
        <div>
          <label htmlFor="city">
            <h3>City:</h3>
          </label>
          <input
            className="form__input"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
        </div>
        <div>
          <label htmlFor="country">
            <h3>Country:</h3>
          </label>
          <input
            className="form__input"
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default WarehouseDetailsForm;
