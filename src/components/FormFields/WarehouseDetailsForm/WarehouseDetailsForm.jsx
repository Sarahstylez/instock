import "./WarehouseDetailsForm.scss";
import ErrorIcon from "../../../assets/Icons/error-24px.svg";

const WarehouseDetailsForm = ({
  formData,
  handleChange,
  handleFocus,
  handleBlur,
  activeField,
  errors,
}) => {
  return (
    <div className="form-warehouse">
      <h2 className="form-warehouse__title">Warehouse Details</h2>
      {["warehouse_name", "address", "city", "country"].map((field) => (
        <div key={field}>
          <label htmlFor={field}>
            <h3>
              {field
                .replace(/_/g, " ")
                .replace(/^./, (str) => str.toUpperCase())}
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
              .replace(/_/g, " ")
              .replace(/^./, (str) => str.toUpperCase())}
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

export default WarehouseDetailsForm;
