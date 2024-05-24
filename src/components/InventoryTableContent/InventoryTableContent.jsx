import "./InventoryTableContent.scss";

import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

const InventoryTableContent = ({ page, listItem }) => {
  return (
    <>
      <div className="mobile-warehouse">
        <div className="mobile-warehouse-title">WAREHOUSE</div>
        <div className="list-table__name">
          <span className="warehouse__name-hover">
            {listItem.warehouse_name}
          </span>
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

      <div className="list-table__actions-delete">
        <img
          className="list-table__delete"
          src={deleteIcon}
          alt="delete warehouse"
        />
      </div>
      <div className="list-table__actions-edit">
        <img className="list-table__edit" src={editIcon} alt="edit warehouse" />
      </div>
    </>
  );
};

export default InventoryTableContent;
