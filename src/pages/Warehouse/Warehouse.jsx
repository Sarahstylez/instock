import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

const WarehousePage = () => {
  return (
    <>
      <WarehouseDetails />
    </>
  );
};

export default WarehousePage;
