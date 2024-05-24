import "./InventoryItem.scss";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";
import Tags from "../Tags/Tags";
import { Link } from "react-router-dom";

/* Return a single inventory item, allow to click to navigate to see inventory item details */
function InventoryItem({
  id,
  name,
  status,
  category,
  quantity,
  warehouse_name,
}) {
  return (
    <div className="inventory">
      <div className="inventory__text">
        <div className="inventory__container">
          <div className="inventory__item">
            <h4 className="inventory__item-title">Inventory Item</h4>
            <Link to={`/inventory/${id}`}>
              <div className="inventory__item-item">
                <h3>{name}</h3>
                <img
                  className="inventory__item-icon"
                  src={Chevron}
                  alt="To Item Details"
                ></img>
              </div>
            </Link>
          </div>
          <div className="inventory__category">
            <h4 className="inventory__category-title">Category</h4>
            <p className="inventory__category-text p2">{category}</p>
          </div>
        </div>
        <div className="inventory__container">
          <div className="inventory__status">
            <h4 className="inventory__status-title">Status</h4>
            <div className="inventory__status-tag">
              <Tags status={status} />
            </div>
          </div>
          <div className="inventory__quantity">
            <h4 className="inventory__quantity-title">Qty</h4>
            <p className="inventory__quantity-value p2">{quantity}</p>
          </div>
          <div className="inventory__warehouse">
            <h4 className="inventory__warehouse-title">Warehouse</h4>
            <p className="inventory__warehouse-value p2">{warehouse_name}</p>
          </div>
        </div>
      </div>
      <div className="inventory__icons">
        <img
          className="inventory__delete"
          src={TrashBin}
          alt="Delete Item"
        ></img>
        <img className="inventory__edit" src={EditButton} alt="Edit Item"></img>
      </div>
    </div>
  );
}

export default InventoryItem;
