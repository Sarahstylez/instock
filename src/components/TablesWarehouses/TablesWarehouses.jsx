import "./TablesWarehouses.scss";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";

function TablesWarehouses() {
  return (
    <div className="warehouse">
      <div className="warehouse__container">
        <div className="warehouse__address">
          <h4>Warehouse Address:</h4>
          <p className="warehouse__address-text p2">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="warehouse__contact">
          <div className="warehouse__contact-name">
            <h4>Contact Name:</h4>
            <p className="warehouse__contact-text p2">
              Graeme Lyon Warehouse Manager
            </p>
          </div>
          <div className="warehouse__contact-info">
            <h4>Contact Information:</h4>
            <p className="warehouse__contact-text p2">
              +1 (647) 504-0911 glyon@instock.com
            </p>
          </div>
        </div>
      </div>
      <div className="warehouse__icons">
        <img
          className="warehouse__delete"
          src={TrashBin}
          alt="Delete Warehouse"
        ></img>
        <img
          className="warehouse__edit"
          src={EditButton}
          alt="Edit Warehouse"
        ></img>
      </div>
    </div>
  );
}
export default TablesWarehouses;
