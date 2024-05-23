import "./TablesInventory.scss";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";
import InStock from "../Tags/Tags";

/* TODO update table and use GET API endpoint */
function TablesInventory() {
  return (
    <div className="inventory">
      <div className="inventory__text">
        <div className="inventory__container">
          <div className="inventory__item">
            <h4 className="inventory__item-title">Inventory Item</h4>
            <div className="inventory__item-item">
              <h3>Television</h3>
              <img
                className="inventory__item-icon"
                src={Chevron}
                alt="To Item Details"
              ></img>
            </div>
          </div>
          <div className="inventory__category">
            <h4 className="inventory__category-title">Category</h4>
            <p className="inventory__category-text p2">Electronics</p>
          </div>
        </div>
        <div className="inventory__container">
          <div className="inventory__status">
            <h4 className="inventory__status-title">Status</h4>
            <div className="inventory__status-tag">
              <InStock />
            </div>
          </div>
          <div className="inventory__quantity">
            <h4 className="inventory__quantity-title">Qty</h4>
            <p className="inventory__quantity-value p2">500</p>
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

export default TablesInventory;
