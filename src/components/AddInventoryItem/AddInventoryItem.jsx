import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./AddInventoryItem.scss";

const AddInventoryItem = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState();
  const [status, setStatus] = useState("In Stock");
  const [warehouse, setWarehouse] = useState("");
  // possibly add warehouse dynamic and get warehouses

  // Form validation logic
  const isFormValid = () => {
    // Form validation
    if (name === "" || description === "" || quantity <= 0 || quantity === "") {
      alert(
        "Please fill on both name and description and ensure quantity is more than 0"
      );
      return false;
    }
    return true;
  };

  // handle add item click
  const handleAdd = async (event) => {
    event.preventDefault();

    try {
      // Gather input from form
      const newItem = {
        warehouse_id: warehouse,
        item_name: name,
        description: description,
        category: category,
        status: status,
        quantity: status === "In Stock" ? quantity : 0,
      };
      // Check if data is valid and post to backend
      if (isFormValid()) {
        const addItem = await axios.post(
          `http://localhost:8080/api/inventory/`,
          newItem
        );
        console.log("New item details:", addItem.data);
        alert("Item added successfully");
        navigate("/inventory"); // Redirect to the inventory list page
      }
    } catch (error) {
      console.error("Error adding the item:", error);
      alert("Failed to add the item. Please try again.");
    }
  };

  // handle navigate back to item list
  const backClick = (event) => {
    event.preventDefault();
    navigate("/inventory");
  };

  // handle cancel button click
  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/inventory");
  };

  return (
    <div className="add-card">
      <div className="add-card__header">
        <div className="add-card__header-container">
          <button className="add-card__back-arrow" onClick={backClick}>
            <img src={BackArrow} alt="back button"></img>
          </button>
          <h1 className="add-card__title">Add New Inventory Item</h1>
        </div>
      </div>
      {/* Form */}
      <form className="add-card__forms" action="">
        <div className="add-card__item-form">
          <h2 className="add-card__forms-title">Item Details</h2>
          {/* Item Name */}
          <div className="add-card__form-group">
            <label className="add-card__label">Item Name</label>
            <input
              type="text"
              className="add-card__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item name"
            />
          </div>
          {/* Item Description */}
          <div className="add-card__form-group">
            <label className="add-card__label">Description</label>
            <input
              type="text"
              className="add-card__input-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please enter a brief item description..."
            />
          </div>
          {/* Category */}
          <div className="add-card__form-group-select">
            <label className="add-card__label">Category</label>
            <select
              className="add-card__input-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Please select"
            >
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>
        <div className="add-card__vail-form">
          <h2 className="add-card__forms-title">Item Availability</h2>
          {/* Status */}
          <div className="add-card__form-group">
            <label className="add-card__label">Status</label>
            <div className="add-card__form-group-radio">
              <label
                className={`add-card__status-button ${
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
                className={`add-card__status-button ${
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
            <div className="add-card__form-group">
              <label className="add-card__label">Quantity</label>
              <input
                type="number"
                className="add-card__input"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="0"
              />
            </div>
          )}
          {/* Warehouse */}
          <div className="add-card__form-group">
            <label className="add-card__label">Warehouse</label>
            <select
              className="add-card__input-select"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
              placeholder="Please select"
            >
              <option value="1">Manhattan</option>
              <option value="2">Washington</option>
              <option value="3">Jersey</option>
              <option value="4">SF</option>
              <option value="5">Santa Monica</option>
              <option value="6">Seattle</option>
              <option value="7">Miami</option>
              <option value="8">Boston</option>
            </select>
          </div>
          <div className="add-card__form_ctas">
            <button className="add-card__button-add" onClick={handleAdd}>
              Add Item
            </button>{" "}
            <button className="add-card__button-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
      {/* Cancel and add items buttons */}
      <div className="add-card__form_ctas-tablet">
        <button className="add-card__button-add" onClick={handleAdd}>
          Add Item
        </button>{" "}
        {/* Changed button text to "Add Item" */}
        <button className="add-card__button-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddInventoryItem;
