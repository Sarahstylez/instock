// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import ItemDetailsCard from "../../components/ItemDetailsCard/ItemDetailsCard";
import "./Inventory.scss";

const InventoryPage = () => {
  return (
    <>
      <div className="inventory__page">
        <ItemDetailsCard></ItemDetailsCard>
      </div>
    </>
  );
};

export default InventoryPage;
