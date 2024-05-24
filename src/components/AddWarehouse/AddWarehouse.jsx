import "./AddWarehouse.scss";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../FormFields/WarehouseDetailsForm/WarehouseDetailsForm";

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
    </section>
  );
}

export default AddWarehouse;
