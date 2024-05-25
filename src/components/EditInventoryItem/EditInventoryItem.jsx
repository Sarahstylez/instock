import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './EditInventoryItem.scss';
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import ItemDetailsForm from '../FormFields/ItemDetailsForm/ItemDetailsForm';
import ItemAvailabilityForm from '../FormFields/ItemAvailabilityForm/ItemAvailabilityForm';

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
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5055/api/inventory/${id}`);
        const itemData = response.data;
        setItem(itemData);
        setName(itemData.item_name);
        setDescription(itemData.description);
        setCategory(itemData.category);
        setQuantity(itemData.quantity);
        setStatus(itemData.status);
        setWarehouse(itemData.warehouse_name);
      } catch (error) {
        console.error('Error fetching the item:', error);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const response = await axios.get('http://localhost:5055/api/warehouses');
        setWarehouses(response.data);
      } catch (error) {
        console.error('Error fetching warehouses:', error);
      }
    };

    fetchItem();
    fetchWarehouses();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const selectedWarehouse = warehouses.find((wh) => wh.warehouse_name === warehouse);
      if (!selectedWarehouse) {
        alert('Invalid warehouse selected');
        return;
      }

      const updatedItem = {
        id: item.id,
        warehouse_id: selectedWarehouse.id, 
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
    <section className="card">
      <div className="card__title">
        <div className="card__title-container">
          <Link className="backarrow__link" to="/inventory">
            <img className="card__icon-arrow" src={BackArrow} alt="Back to Inventory List Page" />
          </Link>
          <h1>Edit Inventory Item</h1>
        </div>
      </div>
      <div className="forms">
        <div className="forms__container">
          <ItemDetailsForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            category={category}
            setCategory={setCategory}
          />
          <ItemAvailabilityForm
            status={status}
            setStatus={setStatus}
            quantity={quantity}
            setQuantity={setQuantity}
            warehouse={warehouse}
            setWarehouse={setWarehouse}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
          />
        </div>
      </div>
      <div>
      <div className="item-availability-form__form-ctas">
        <button className="item-availability-form__button-add" onClick={handleUpdate}>
        <h3 className="default-label">Save</h3>
  <h3 className="tablet-label">+ Item Update</h3>
        </button>
        <button className="item-availability-form__button-cancel" onClick={handleCancel}>
        <h3>Cancel</h3>
        </button>
      </div>
      </div>
    </section>
  );
};

export default EditInventoryItem;
