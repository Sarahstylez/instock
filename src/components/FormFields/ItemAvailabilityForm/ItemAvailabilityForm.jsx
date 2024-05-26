import { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemAvailabilityForm.scss';

const ItemAvailabilityForm = ({ status, setStatus, quantity, setQuantity, warehouse, setWarehouse, handleCancel, handleUpdate }) => {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/warehouses`);
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
        <label className="item-availability-form__label"><h3>Status</h3></label>
        <div className="item-availability-form__status-group">
          <label className={`item-availability-form__status-button ${status === 'In Stock' ? 'active' : ''}`}>
            <input
              type="radio"
              name="status"
              value="In Stock"
              checked={status === 'In Stock'}
              onChange={() => setStatus('In Stock')}
            />
           <p2> In Stock</p2>
          </label>
          <label className={`item-availability-form__status-button ${status === 'Out of Stock' ? 'active' : ''}`}>
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              checked={status === 'Out of Stock'}
              onChange={() => setStatus('Out of Stock')}
            />
           <p2> Out of Stock</p2>
          </label>
        </div>
      </div>
      {status === 'In Stock' && (
        <div className="item-availability-form__group">
          <label className="item-availability-form__label"><h3>Quantity</h3></label>
          <input
            type="number"
            className="item-availability-form__input"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      )}
      <div className="item-availability-form__group">
        <label className="item-availability-form__label"><h3>Warehouse</h3></label>
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
   
    </div>
  );
};

export default ItemAvailabilityForm;
