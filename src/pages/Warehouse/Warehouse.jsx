import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Warehouse.scss";
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
    <>
      <h1>Workout Page</h1>
    </>
  );
};

export default WarehouseList;
