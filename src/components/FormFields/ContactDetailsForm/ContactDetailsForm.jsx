import "./ContactDetailsForm.scss";
import { useState } from "react";

const ContactDetailsForm = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
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
    <div className="form-contact">
      <h2 className="form-contact__title">Contact Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contactName">
            <h3>Contact Name:</h3>
          </label>
          <input
            className="form-contact__input"
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Contact Name"
            required
          />
        </div>
        <div>
          <label htmlFor="position">
            <h3>Position:</h3>
          </label>
          <input
            className="form-contact__input"
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">
            <h3>City:</h3>
          </label>
          <input
            className="form-contact__input"
            type="text"
            id="city"
            name="city"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label htmlFor="email">
            <h3>Country:</h3>
          </label>
          <input
            className="form-contact__input"
            type="text"
            id="country"
            name="country"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
