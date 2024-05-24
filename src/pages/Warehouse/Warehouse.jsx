import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import ListTable from "../../components/ListTable/ListTable";

const WarehousePage = () => {
  return (
    <>
      {/* TODO remove after refactor is done and Mary is happy about refactor */}
      {/* <WarehouseDetails /> */}
      <ListTable page={"warehouses"} />
    </>
  );
};

export default WarehousePage;
