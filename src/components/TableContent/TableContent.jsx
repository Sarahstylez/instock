import "./TableContent.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

const WarehouseTableContent = ({ listItem }) => (
  <>
    <div className="mobile-warehouse">
      <div className="mobile-warehouse-title">WAREHOUSE</div>
      <div className="list-table__name">
        <span className="warehouse__name-hover">{listItem.warehouse_name}</span>
        <img
          className="list-table__icon"
          src={chevronIcon}
          alt="chevron icon"
        />
      </div>
    </div>
    <div className="mobile-add">
      <div className="mobile-add-title">ADDRESS</div>
      <div className="list-table__add">
        {listItem.address} {listItem.city}, {listItem.country}
      </div>
    </div>
    <div className="mobile-contact-name">
      <div className="mobile-contact-name-title">CONTACT NAME</div>
      <div className="list-table__contact-name">{listItem.contact_name}</div>
    </div>
    <div className="mobile-contact-info">
      <div className="mobile-contact-info-title">CONTACT INFORMATION</div>
      <div className="list-table__contact-info">
        <p>{listItem.contact_phone}</p>
        <p>{listItem.contact_email}</p>
      </div>
    </div>
  </>
);

const InventoryTableContent = ({ listItem }) => (
  <>
    <div className="mobile-item">
      <div className="mobile-item-title">ITEM</div>
      <div className="list-table__item">
        <span className="item__name-hover">{listItem.item_name}</span>
        <img
          className="list-table__icon"
          src={chevronIcon}
          alt="chevron icon"
        />
      </div>
    </div>
    <div className="mobile-category">
      <div className="mobile-category-title">CATEGORY</div>
      <div className="list-table__category">{listItem.category}</div>
    </div>
    <div className="mobile-status">
      <div className="mobile-status-title">STATUS</div>
      <div className="list-table__status">{listItem.status}</div>
    </div>
    <div className="mobile-quantity">
      <div className="mobile-quantity-title">QUANTITY</div>
      <div className="list-table__quantity">{listItem.quantity}</div>
    </div>
  </>
);

const TableContent = ({ page, listItem }) => {
  return (
    <>
      {page === "warehouses" ? (
        <WarehouseTableContent listItem={listItem} />
      ) : (
        <InventoryTableContent listItem={listItem} />
      )}
      <div className="list-table__actions-delete">
        <img
          className="list-table__delete"
          src={deleteIcon}
          alt="delete item"
        />
      </div>
      <div className="list-table__actions-edit">
        <img className="list-table__edit" src={editIcon} alt="edit item" />
      </div>
    </>
  );
};

export default TableContent;
