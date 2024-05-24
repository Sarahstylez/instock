import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./AddInventoryItem.scss";

const AddInventoryItem = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Gear");
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState("In Stock");
  const [warehouse, setWarehouse] = useState();

  // set array of warehouse options and map each to a id or use index + 1
  const warehouseData = {
    Manhattan: 1,
    Washington: 2,
    Jersey: 3,
    SF: 4,
    "Santa Monica": 5,
    Seattle: 6,
    Miami: 7,
    Boston: 8,
  };

  console.log({
    warehouse_id: warehouse,
    item_name: name,
    description: description,
    category: category,
    status: status,
    quantity: status === "In Stock" ? quantity : 0,
  });

  // Form validation logic
  const isFormValid = () => {
    // Form validation
    if (name === "" || description === "") {
      alert("Please fill on both name and description");
      return false;
    } else if (name.length < 3 || description.length < 10) {
      alert(
        "Please enter name longer than 3 characters and description longer than 10 characters"
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
      const warehouseId = warehouseData[warehouse];
      const newItem = {
        warehouse_id: warehouseId,
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
        alert("Item added successfully");
        navigate("/inventory"); // Redirect to the inventory list page
      }
    } catch (error) {
      console.error("Error adding the item:", error);
      alert("Failed to add the item. Please try again.");
    }
  };

  // handle navigate back to item details list
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
        <button className="item__card__back-arrow" onClick={backClick}>
          <img src={BackArrow} alt="back button"></img>
        </button>
        <h1 className="add-card__title">Add New Inventory Item</h1>
      </div>
      {/* Add divider here */}
      {/* Form */}
      <form className="add-card__forms" action="">
        <h2>Item Details</h2>
        {/* Item Name */}
        <div className="add-card__form-group">
          <label className="add-card__label">Item Name</label>
          <input
            type="text"
            className="add-card__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Item Description */}
        <div className="add-card__form-group">
          <label className="add-card__label">Description</label>
          <input
            type="text"
            className="add-card__input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* Category */}
        <div className="add-card__form-group">
          <label className="add-card__label">Category</label>
          <select
            className="add-card__select"
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
        <div className="add-card__form-group">
          <label className="add-card__label">Status</label>
          <div className="add-card__status-group">
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
            />
          </div>
        )}
        {/* Warehouse */}
        <div className="add-card__form-group">
          <label className="add-card__label">Warehouse</label>
          <select
            className="add-card__select"
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
        <button className="add-card__button" onClick={handleAdd}>
          Add Item
        </button>{" "}
        {/* Changed button text to "Add Item" */}
        <button className="add-card__button" onClick={handleCancel}>
          Cancel
        </button>
        {/* Divider */}
      </form>
    </div>
  );
};

export default AddInventoryItem;
