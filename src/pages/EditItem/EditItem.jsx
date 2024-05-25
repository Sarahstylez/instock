// import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
// import axios from "axios";
//import { useParams, useNavigate } from 'react-router-dom';
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
import "./EditItem.scss";

const EditItemPage = () => {
  return (
    <>
      <div className="edititem__page">
        <EditInventoryItem></EditInventoryItem >
      </div>
    </>
  );
};

export default EditItemPage;