import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ListTable.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "warehouse_name",
    direction: "ascending",
  });

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

  const sortItems = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedWarehouses = [...warehouses].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <section className="warehouse__section">
      <div className="warehouse__overlay">
        <div className="warehouse__top-section">
          <h1 className="warehouse__title">Warehouses</h1>
          <div className="warehouse__top-right">
            <form id="warehouse__search">
              <img
                className="warehouse__search-icon"
                src={searchIcon}
                alt="search icon"
              />
              <input type="text" name="search" placeholder="Search..." />
            </form>
            <button className="warehouse__upload-btn">
              + Add New Warehouse
            </button>
          </div>
        </div>
        <ul>
          <li className="warehouse__list --sort-header">
            <div
              onClick={() => sortItems("warehouse")}
              className="warehouse__sort-name"
            >
              WAREHOUSE
              <img className="sort-icon" src={sortIcon} alt="sort icon" />
            </div>
            <div
              onClick={() => sortItems("address")}
              className="warehouse__sort-add"
            >
              ADDRESS
              <img className="sort-icon" src={sortIcon} alt="sort icon" />
            </div>
            <div
              onClick={() => sortItems("contact_name")}
              className="warehouse__sort-contact-name"
            >
              CONTACT NAME
              <img className="sort-icon" src={sortIcon} alt="sort icon" />
            </div>
            <div
              onClick={() => sortItems("contact_phone")}
              className="warehouse__sort-contact-info"
            >
              CONTACT INFORMATION
              <img className="sort-icon" src={sortIcon} alt="sort icon" />
            </div>
            <div className="warehouse__sort-actions">ACTIONS</div>
          </li>
          {sortedWarehouses.map((warehouse) => (
            <li className="warehouse__list" key={warehouse.id}>
              <div className="mobile-warehouse">
                <div className="mobile-warehouse-title">WAREHOUSE</div>
                <div className="warehouse__name">
                  {warehouse.warehouse_name}
                  <img
                    className="warehouse__icon"
                    src={chevronIcon}
                    alt="chevron icon"
                  />
                </div>
              </div>

              <div className="mobile-add">
                <div className="mobile-add-title">ADDRESS</div>
                <div className="warehouse__add">
                  {warehouse.address} {warehouse.city}, {warehouse.country}
                </div>
              </div>

              <div className="mobile-contact-name">
                <div className="mobile-contact-name-title">CONTACT NAME</div>
                <div className="warehouse__contact-name">
                  {warehouse.contact_name}
                </div>
              </div>

              <div className="mobile-contact-info">
                <div className="mobile-contact-info-title">
                  CONTACT INFORMATION
                </div>
                <div className="warehouse__contact-info">
                  <p>{warehouse.contact_phone}</p>
                  <p>{warehouse.contact_email}</p>
                </div>
              </div>

              <div className="warehouse__actions-delete">
                <img
                  className="warehouse__delete"
                  src={deleteIcon}
                  alt="delete warehouse"
                />
              </div>
              <div className="warehouse__actions-edit">
                <img
                  className="warehouse__edit"
                  src={editIcon}
                  alt="edit warehouse"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WarehouseList;
