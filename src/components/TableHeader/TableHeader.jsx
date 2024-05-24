import "./TableHeader.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";

const TableHeader = ({ page, sortItems }) => {
  return (
    <li className="list-table__list --sort-header">
      <div
        onClick={() => sortItems("warehouse")}
        className="list-table__sort-name"
      >
        WAREHOUSE
        <img className="sort-icon" src={sortIcon} alt="sort icon" />
      </div>
      <div
        onClick={() => sortItems("address")}
        className="list-table__sort-add"
      >
        ADDRESS
        <img className="sort-icon" src={sortIcon} alt="sort icon" />
      </div>
      <div
        onClick={() => sortItems("contact_name")}
        className="list-table__sort-contact-name"
      >
        CONTACT NAME
        <img className="sort-icon" src={sortIcon} alt="sort icon" />
      </div>
      <div
        onClick={() => sortItems("contact_phone")}
        className="list-table__sort-contact-info"
      >
        CONTACT INFORMATION
        <img className="sort-icon" src={sortIcon} alt="sort icon" />
      </div>
      <div className="list-table__sort-actions">ACTIONS</div>
    </li>
  );
};

export default TableHeader;
