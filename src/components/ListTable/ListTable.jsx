import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ListTable.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

import PageHeader from "../PageHeader/PageHeader";
import TableHeader from "../TableHeader/TableHeader";

const ListTable = ({ page }) => {
  const [list, setList] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "warehouse_name",
    direction: "ascending",
  });

  useEffect(() => {
    /* Fetch data from inventory or warehouses depending on page prop passed */
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/${page}`
        );
        setList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const sortItems = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedWarehouses = [...list].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <section className="list-table__section">
      <div className="list-table__overlay">
        <PageHeader page={page} />
        <ul>
          <TableHeader page={page} sortItems={sortItems} />
          {sortedWarehouses.map((warehouse) => (
            <li className="list-table__list" key={warehouse.id}>
              <div className="mobile-warehouse">
                <div className="mobile-warehouse-title">WAREHOUSE</div>
                <div className="list-table__name">
                  {warehouse.warehouse_name}
                  <img
                    className="list-table__icon"
                    src={chevronIcon}
                    alt="chevron icon"
                  />
                </div>
              </div>

              <div className="mobile-add">
                <div className="mobile-add-title">ADDRESS</div>
                <div className="list-table__add">
                  {warehouse.address} {warehouse.city}, {warehouse.country}
                </div>
              </div>

              <div className="mobile-contact-name">
                <div className="mobile-contact-name-title">CONTACT NAME</div>
                <div className="list-table__contact-name">
                  {warehouse.contact_name}
                </div>
              </div>

              <div className="mobile-contact-info">
                <div className="mobile-contact-info-title">
                  CONTACT INFORMATION
                </div>
                <div className="list-table__contact-info">
                  <p>{warehouse.contact_phone}</p>
                  <p>{warehouse.contact_email}</p>
                </div>
              </div>

              <div className="list-table__actions-delete">
                <img
                  className="list-table__delete"
                  src={deleteIcon}
                  alt="delete warehouse"
                />
              </div>
              <div className="list-table__actions-edit">
                <img
                  className="list-table__edit"
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

export default ListTable;
