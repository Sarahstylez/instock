import "./Inventory.scss";
import ListTable from "../../components/ListTable/ListTable";

//importing relevant components to display on page
import TablesInventory from "../../components/TablesInventory/TablesInventory";

const InventoryPage = () => {
  return (
    <>
      {/* <TablesInventory /> */}
      {/* <ListTable page={"inventory"} /> */}

      <ListTable page={"inventory"} />
    </>
  );
};

export default InventoryPage;
