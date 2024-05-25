import './ItemDetailsForm.scss';

const ItemDetailsForm = ({ name, setName, description, setDescription, category, setCategory }) => {
  return (
    <div className="item-details-form">
      <h2 className="item-details-form__title">Item Details</h2>
      <div className="item-details-form__group">
        <h3 className="item-details-form__label">Item Name</h3>
        <input
          type="text"
          className="item-details-form__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="item-details-form__group">
        <h3 className="item-details-form__label">Description</h3>
        <textarea
          type="text"
          className="item-details-form-description__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="item-details-form__group">
        <h3 className="item-details-form__label">Category</h3>
        <select
          className="item-details-form__select"
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
    </div>
  );
};

export default ItemDetailsForm;
