import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//importing relevant components to display on page
import TablesInventory from "../../components/TablesInventory/TablesInventory";

const InventoryPage = () => {
  /* TODO insert page header component */
  return <TablesInventory />;
};

export default InventoryPage;
