import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditInventoryItem.scss';

const EditInventoryItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState('In Stock');
  const [warehouse, setWarehouse] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5055/api/inventory/${id}`);
        setItem(response.data);
        setName(response.data.item_name);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setQuantity(response.data.quantity);
        setStatus(response.data.status);
        setWarehouse(response.data.warehouse_name);
      } catch (error) {
        console.error('Error fetching the item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedItem = {
        id: item.id,
        warehouse_name: warehouse,
        item_name: name,
        description,
        category,
        status,
        quantity: status === 'In Stock' ? quantity : 0,
      };
      await axios.put(`http://localhost:5055/api/inventory/${item.id}`, updatedItem);
      alert('Item updated successfully');
      navigate('/inventory'); // Redirect to the inventory list page
    } catch (error) {
      console.error('Error updating the item:', error);
      alert('Failed to update the item. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/inventory');
  };

  return (
    <div className="edit-inventory-item">
      <h1 className="edit-inventory-item__title">Edit Inventory Item</h1>
      <div className="edit-inventory-item__form-group">
        <label className="edit-inventory-item__label">Item Name</label>
        <input
          type="text"
          className="edit-inventory-item__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="edit-inventory-item__form-group">
        <label className="edit-inventory-item__label">Description</label>
        <input
          type="text"
          className="edit-inventory-item__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="edit-inventory-item__form-group">
        <label className="edit-inventory-item__label">Category</label>
        <select
          className="edit-inventory-item__select"
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
      <div className="edit-inventory-item__form-group">
        <label className="edit-inventory-item__label">Status</label>
        <div className="edit-inventory-item__status-group">
          <label className={`edit-inventory-item__status-button ${status === 'In Stock' ? 'active' : ''}`}>
            <input
              type="radio"
              name="status"
              value="In Stock"
              checked={status === 'In Stock'}
              onChange={() => setStatus('In Stock')}
            />
            In Stock
          </label>
          <label className={`edit-inventory-item__status-button ${status === 'Out of Stock' ? 'active' : ''}`}>
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
        <div className="edit-inventory-item__form-group">
          <label className="edit-inventory-item__label">Quantity</label>
          <input
            type="number"
            className="edit-inventory-item__input"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      )}
      <div className="edit-inventory-item__form-group">
        <label className="edit-inventory-item__label">Warehouse</label>
        <select
          className="edit-inventory-item__select"
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
      <button className="edit-inventory-item__button" onClick={handleUpdate}>
        Update Item
      </button>
      <button className="edit-inventory-item__button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default EditInventoryItem;
