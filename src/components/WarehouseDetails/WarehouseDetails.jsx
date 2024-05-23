import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditButtonWhite from "../../assets/Icons/edit-white-24px.svg";
import TablesInventory from "../TablesInventory/TablesInventory";
import TablesWarehouses from "../TablesWarehouses/TablesWarehouses";

function WarehouseDetails() {
  return (
    <section className="card">
      <div className="card__title">
        <div className="card__title-container">
          <Link className="logo_link" to="/warehouses">
            <img
              className="card__icon-arrow"
              src={BackArrow}
              alt="Back to Warehouse List Page"
            ></img>
          </Link>
          <h1 className="card__warehouse">Washington</h1>
        </div>
        <button className="card__icon-edit-button">
          <img
            className="card__icon-edit"
            src={EditButtonWhite}
            alt="Edit Warehouse Details"
          ></img>
          <h3 className="card__icon-edit-text">Edit</h3>
        </button>
      </div>
      <TablesWarehouses />
      <TablesInventory />
    </section>
  );
}

export default WarehouseDetails;
