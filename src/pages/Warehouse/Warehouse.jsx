import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Warehouse.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/warehouses"
        );
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };

    fetchWarehouses();
  }, []);

  return (
    <section className="warehouse__section">
      <div className="warehouse__top-section">
        <h1 className="warehouse__title">Warehouses</h1>
        <form id="warehouse__search">
          <img
            className="warehouse__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input type="text" name="Search" placeholder="Search..." />
        </form>
        <button className="warehouse__upload-btn">+ Add New Warehouse</button>
      </div>
      <ul>
        {warehouses.map((warehouse) => (
          <li className="warehouse__list" key={warehouse.id}>
            <div className="warehouse__name">{warehouse.warehouse_name}</div>
            <div className="warehouse__add">
              {warehouse.address} {warehouse.city}, {warehouse.country}
            </div>
            <div className="warehouse__contact-name">
              {warehouse.contact_name}
            </div>
            <div className="warehouse__contact-info">
              <p>{warehouse.contact_phone}</p>
              <p>{warehouse.contact_email}</p>
            </div>
            <div className="warehouse__actions">
              <img
                className="warehouse__delete"
                src={deleteIcon}
                alt="delete warehouse"
              />
              <img
                className="warehouse__edit"
                src={editIcon}
                alt="edit warehouse"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WarehouseList;
