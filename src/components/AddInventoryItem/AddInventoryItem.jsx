import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./AddIventoryItem.scss";

const AddInventoryItem = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState("In Stock");
  const [warehouse, setWarehouse] = useState("");

  // handle add item click
  const handleAdd = async (event) => {
    try {
      const addItem = await axios.post(`http://localhost:8080/api/inventory/`, {
        warehouse_id: event.target.warehouse.value,
        item_name: event.target.warehouse.value,
        description: event.target.warehouse.value,
        category: event.target.warehouse.value,
        status: event.target.warehouse.value,
        quantity: status === "In Stock" ? quantity : 0,
      });
      alert("Item added successfully");
      navigate("/inventory"); // Redirect to the inventory list page
    } catch (error) {
      console.error("Error adding the item:", error);
      alert("Failed to add the item. Please try again.");
    }
  };

  // handle navigate back to item details list
  const backClick = () => {
    navigate("/inventory");
  };

  // handle cancel button click
  const handleCancel = () => {
    navigate("/inventory");
  };

  return (
    <div className="add-inventory-item">
      <div className="add-inventory__header">
        <button className="item__card__back-arrow" onClick={backClick}>
          <img src={BackArrow} alt="back button"></img>
        </button>
        <h1 className="add-inventory-item__title">Add New Inventory Item</h1>
      </div>
      {/* Add divider here */}
      {/* Form */}
      <form action="">
        <h2>Item Details</h2>
        {/* Item Name */}
        <div className="add-inventory-item__form-group">
          <label className="add-inventory-item__label">Item Name</label>
          <input
            type="text"
            className="add-inventory-item__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Item Description */}
        <div className="add-inventory-item__form-group">
          <label className="add-inventory-item__label">Description</label>
          <input
            type="text"
            className="add-inventory-item__input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* Category */}
        <div className="add-inventory-item__form-group">
          <label className="add-inventory-item__label">Category</label>
          <select
            className="add-inventory-item__select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
        </div>
        {/* Divider here */}
        <h2>Item Availability</h2>
        {/* Status */}
        <div className="add-inventory-item__form-group">
          <label className="add-inventory-item__label">Status</label>
          <div className="add-inventory-item__status-group">
            <label
              className={`add-inventory-item__status-button ${
                status === "In Stock" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="status"
                value="In Stock"
                checked={status === "In Stock"}
                onChange={() => setStatus("In Stock")}
              />
              In Stock
            </label>
            <label
              className={`add-inventory-item__status-button ${
                status === "Out of Stock" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                checked={status === "Out of Stock"}
                onChange={() => setStatus("Out of Stock")}
              />
              Out of Stock
            </label>
          </div>
        </div>
        {/* Quantity */}
        {status === "In Stock" && (
          <div className="add-inventory-item__form-group">
            <label className="add-inventory-item__label">Quantity</label>
            <input
              type="number"
              className="add-inventory-item__input"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        )}
        {/* Warehouse */}
        <div className="add-inventory-item__form-group">
          <label className="add-inventory-item__label">Warehouse</label>
          <select
            className="add-inventory-item__select"
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
          >
            <option value="Manhattan">Manhattan</option>
            <option value="Washington">Washington</option>
            <option value="Jersey">Jersey</option>
            <option value="SF">SF</option>
            <option value="Santa Monica">Santa Monica</option>
            <option value="Seattle">Seattle</option>
            <option value="Miami">Miami</option>
            <option value="Boston">Boston</option>
          </select>
        </div>
        {/* Cancel and add items buttons */}
        <button className="add-inventory-item__button" onClick={handleAdd}>
          Add Item
        </button>{" "}
        {/* Changed button text to "Add Item" */}
        <button className="add-inventory-item__button" onClick={handleCancel}>
          Cancel
        </button>
        {/* Divider */}
      </form>
    </div>
  );
};

export default AddInventoryItem;
