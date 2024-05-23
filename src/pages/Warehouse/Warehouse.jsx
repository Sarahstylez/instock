import axios from "axios";
import React, { useState, useEffect } from 'react';
import "./Warehouse.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";


const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/warehouses');
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };

    fetchWarehouses();
  }, []);

  return (
    <section className="warehouse__section">
      <h1 className="warehouse__title">Warehouses</h1>
      <form id="warehouse__search">
            <img
              className="warehouse__search-icon"
              src={searchIcon}
              alt="search icon"
            />
            <input type="text" name="Search" placeholder="Search..." />
          </form>

      <ul>
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <h2>{warehouse.warehouse_name}</h2>
            <p>{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
            <p>{warehouse.contact_name} - {warehouse.contact_position}</p>
            <p>{warehouse.contact_phone}</p>
            <p>{warehouse.contact_email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WarehouseList;