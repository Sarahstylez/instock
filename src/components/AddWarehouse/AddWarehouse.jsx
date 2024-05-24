import "./AddWarehouse.scss";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../FormFields/WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../FormFields/ContactDetailsForm/ContactDetailsForm";

function AddWarehouse() {
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
      <WarehouseDetailsForm />
      <ContactDetailsForm />
      <div className="form__ctas">
        <button className="form__ctas-cancel" type="reset">
          <h3>Cancel</h3>
        </button>
        <button className="form__ctas-add" type="submit">
          <h3>Add Warehouse</h3>
        </button>
      </div>
    </section>
  );
}

export default AddWarehouse;
