import React from "react";
import "./TablesWarehouses.scss";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";

function TablesWarehouses({ warehouses }) {
  return (
    <div className="warehouses">
      {warehouses.map((warehouse) => (
        <div className="warehouse" key={warehouse.id}>
          <div className="warehouse__container">
            <div className="warehouse__address">
              <h4>Warehouse Address:</h4>
              <p className="warehouse__address-text p2">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
            </div>
            <div className="warehouse__contact">
              <div className="warehouse__contact-name">
                <h4>Contact Name:</h4>
                <p className="warehouse__contact-text p2">
                  {warehouse.contact_name} {warehouse.contact_position}
                </p>
              </div>
              <div className="warehouse__contact-info">
                <h4>Contact Information:</h4>
                <p className="warehouse__contact-text p2">
                  {warehouse.contact_phone} {warehouse.contact_email}
                </p>
              </div>
            </div>
          </div>
          <div className="warehouse__icons">
            <img
              className="warehouse__delete"
              src={TrashBin}
              alt="Delete Warehouse"
            />
            <img
              className="warehouse__edit"
              src={EditButton}
              alt="Edit Warehouse"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TablesWarehouses;
