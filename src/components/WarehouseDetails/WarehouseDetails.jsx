import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditButtonWhite from "../../assets/Icons/edit-white-24px.svg";
import TablesWarehouses from "../TablesWarehouses/TablesWarehouses";

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await fetch(`/api/warehouses/${id}`);
        const data = await response.json();
        setWarehouse(data);
      } catch (error) {
        console.error("Error fetching the warehouse details:", error);
      }
    };

    fetchWarehouse();
  }, [id]);

  if (!warehouse) {
    return <div>Loading...</div>;
  }

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
          <h1 className="card__warehouse">{warehouse.warehouse_name}</h1>
        </div>
        <button className="card__icon-edit-button">
          <img
            className="card__icon-edit"
            src={EditButtonWhite}
            alt="Edit Warehouse Details"
          />
          <h3 className="card__icon-edit-text">Edit</h3>
        </button>
      </div>
      <TablesWarehouses warehouses={[warehouse]} />
      {/* <TablesInventory /> */}
    </section>
  );
}

export default WarehouseDetails;
