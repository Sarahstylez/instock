import "./TablesInventory.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import { useState, useEffect } from "react";
import axios from "axios";

/* TODO update table and use GET API endpoint */
function TablesInventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/inventory");
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <>
      <div className="inventory__page">
        {/* Map through list and on click navigate item details page */}
        {inventory.map((item) => (
          <InventoryItem
            key={item.id}
            id={item.id} // Pass the id prop for navigation
            name={item.item_name}
            status={item.status}
            category={item.category}
            quantity={item.quantity}
            warehouse_name={item.warehouse_name}
          />
        ))}
      </div>
    </>
  );
}

export default TablesInventory;
