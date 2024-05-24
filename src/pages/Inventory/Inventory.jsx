// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./Inventory.scss";

const InventoryPage = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 9,
      warehouse_name: "Manhattan",
      item_name: "Television",
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: "Electronics",
      status: "In Stock",
      quantity: 500,
    },
    // Add more items here
  ];

  const handleItemClick = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <>
      <div className="inventory__page">
        {/* Map through list and on click navigate item details page */}
        {items.map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item.id)}>
            {/* Render item summary here */}
            <h2>{item.item_name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InventoryPage;
