import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemAvailabilityForm.scss';

const ItemAvailabilityForm = ({ status, setStatus, quantity, setQuantity, warehouse, setWarehouse, handleCancel, handleSave }) => {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get('http://localhost:5055/api/warehouses'); // Updated with the correct API endpoint
        console.log(response.data); // Debugging log to check the fetched data
        setWarehouses(response.data);
      } catch (error) {
        setError('Error fetching warehouses');
        console.error('Error fetching warehouses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWarehouses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="item-availability-form">
      <h2 className="item-availability-form__title">Item Availability</h2>
      <div className="item-availability-form__group">
        <label className="item-availability-form__label">Status</label>
        <div className="item-availability-form__status-group">
          <label className={`item-availability-form__status-button ${status === 'In Stock' ? 'active' : ''}`}>
            <input
              type="radio"
              name="status"
              value="In Stock"
              checked={status === 'In Stock'}
              onChange={() => setStatus('In Stock')}
            />
            In Stock
          </label>
          <label className={`item-availability-form__status-button ${status === 'Out of Stock' ? 'active' : ''}`}>
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              checked={status === 'Out of Stock'}
              onChange={() => setStatus('Out of Stock')}
            />
            Out of Stock
          </label>
        </div>
      </div>
      {status === 'In Stock' && (
        <div className="item-availability-form__group">
          <label className="item-availability-form__label">Quantity</label>
          <input
            type="number"
            className="item-availability-form__input"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      )}
      <div className="item-availability-form__group">
        <label className="item-availability-form__label">Warehouse</label>
        <select
          className="item-availability-form__select"
          value={warehouse}
          onChange={(e) => setWarehouse(e.target.value)}
        >
          {warehouses.map((wh) => (
            <option key={wh.id} value={wh.warehouse_name}>{wh.warehouse_name}</option>
          ))}
        </select>
      </div>
      <div className="item-availability-form__form-ctas">
        <button className="item-availability-form__button-add" onClick={handleSave}>
          Add Item
        </button>
        <button className="item-availability-form__button-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ItemAvailabilityForm;
