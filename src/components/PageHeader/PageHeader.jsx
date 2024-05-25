import "./PageHeader.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";

const PageHeader = ({ page }) => {
  return (
    <div className="list-table__top-section">
      <h1 className="list-table__title">
        {page === "warehouses"
          ? "Warehouses"
          : page === "inventory"
          ? "Inventory"
          : ""}
      </h1>
      <div className="list-table__top-right">
        <form id="list-table__search">
          <img
            className="list-table__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input type="text" name="search" placeholder="Search..." />
          <button className="list-table__upload-btn">
            + Add New{" "}
            {page === "warehouses"
              ? "Warehouse"
              : page === "inventory"
              ? "Item"
              : ""}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PageHeader;
