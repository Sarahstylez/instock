import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/Icons/error-24px.svg";
import "./AddInventoryItem.scss";

const AddInventoryItem = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("default");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [warehouse, setWarehouse] = useState("default");
  const [warehouses, setWarehouses] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/warehouses"
        );
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    };

    fetchWarehouses();
  }, []);

  // form validation
  const isFormValid = () => {
    const newErrors = {};

    if (name === "") newErrors.name = "This field is required";
    if (description === "") newErrors.description = "This field is required";
    if (quantity <= 0 || quantity === "")
      newErrors.quantity = "This field is required";
    if (category === "default") newErrors.category = "This field is required";
    if (warehouse === "default") newErrors.warehouse = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle add item click
  const handleAdd = async (event) => {
    event.preventDefault();

    if (!isFormValid()) return;

    try {
      const selectedWarehouse = warehouses.find(
        (wh) => wh.warehouse_name === warehouse
      );
      if (!selectedWarehouse) {
        alert("Invalid warehouse selected");
        return;
      }
      // Gather input from form
      const newItem = {
        warehouse_id: selectedWarehouse.id,
        item_name: name,
        description: description,
        category: category,
        status: status,
        quantity: status === "In Stock" ? quantity : 0,
      };
      // Check if data is valid and post to backend
      const addItem = await axios.post(
        `http://localhost:8080/api/inventory/`,
        newItem
      );
      console.log("New item details:", addItem.data);
      alert("Item added successfully");
      navigate("/inventory"); // Redirect to the inventory list page
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
      <div className="add-card__divider"></div>
      {/* Form */}
      <form className="add-card__forms" action="">
        <div className="add-card__item-form">
          <h2 className="add-card__forms-title">Item Details</h2>
          {/* Item Name */}
          <div className="add-card__form-group">
            <label className="add-card__label">Item Name</label>
            <input
              type="text"
              className={`add-card__input ${errors.name ? `error` : ``}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item name"
            />
            {errors.name && (
              <div className="error-message">
                <img src={ErrorIcon} alt="Error Icon" />
                {errors.name}
              </div>
            )}
          </div>
          {/* Item Description */}
          <div className="add-card__form-group">
            <label className="add-card__label">Description</label>
            <textarea
              className={`add-card__input-description ${
                errors.description ? `error` : ``
              }`}
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please enter a brief item description..."
            />
            {errors.description && (
              <div className="error-message">
                <img src={ErrorIcon} alt="Error Icon" />
                {errors.name}
              </div>
            )}
          </div>
          {/* Category */}
          <div className="add-card__form-group-select">
            <label className="add-card__label">Category</label>
            <select
              className={`add-card__input-select ${
                errors.category ? `error` : ``
              }`}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="default">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
            {errors.category && (
              <div className="error-message">
                <img src={ErrorIcon} alt="Error Icon" />
                {errors.category}
              </div>
            )}
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
                  className="add-card__radio"
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
                  className="add-card__radio"
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
                className={`add-card__input ${errors.quantity ? `error` : ``}`}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="0"
              />
              {errors.quantity && (
                <div className="error-message">
                  <img src={ErrorIcon} alt="Error Icon" />
                  {errors.quantity}
                </div>
              )}
            </div>
          )}
          {/* Warehouse */}
          <div className="add-card__form-group">
            <label className="add-card__label">Warehouse</label>
            <select
              className={`add-card__input-select ${
                errors.warehouse ? `error` : ``
              }`}
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
            >
              <option value="default">Select a category</option>
              {warehouses.map((wh) => (
                <option key={wh.id} value={wh.warehouse_name}>
                  {wh.warehouse_name}
                </option>
              ))}
            </select>
            {errors.warehouse && (
              <div className="error-message">
                <img src={ErrorIcon} alt="Error Icon" />
                {errors.warehouse}
              </div>
            )}
          </div>
        </div>
      </form>
      <div className="add-card__form_ctas">
        <button className="add-card__button-add" onClick={handleAdd}>
          + Add Item
        </button>{" "}
        <button className="add-card__button-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddInventoryItem;
