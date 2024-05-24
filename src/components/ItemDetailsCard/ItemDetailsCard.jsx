import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import Tags from "../Tags/Tags.jsx";
import "./ItemDetailsCard.scss";
import "../Tags/Tags.scss";

const ItemDetailsCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = "http://localhost:8080/api";
  const [item, setItem] = useState(null);

  // Fetch item details
  useEffect(() => {
    const getItem = async () => {
      try {
        const item = await axios.get(`${apiUrl}/inventory/${id}`);
        console.log(item.data);
        setItem(item.data);
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };
    getItem();
  }, [id]);

  // handle edit functionality
  const editClick = () => {
    console.log("Edit being click");
  };

  // handle navigate back to item details list
  const backClick = () => {
    navigate("/inventory");
  };

  return (
    <>
      <div className="item__card">
        <div className="item__card__header">
          <button className="item__card__back-arrow" onClick={backClick}>
            <img src={BackArrow} alt="back button"></img>
          </button>
          {item && <h1 className="item__card__name">{item.item_name}</h1>}{" "}
          <button className="item__card__edit" onClick={editClick}>
            <img
              src={EditIcon}
              alt="edit button"
              className="item__card__edit-img"
            ></img>
            <h3 className="item__card__edit-text">Edit</h3>
          </button>
        </div>
        <div className="item__card__divider"></div>
        {/* Conditional render while fetching */}
        {item ? (
          <div className="item__card__details">
            <div className="item__card__left_column">
              <div className="item__card__description">
                <h2 className="">ITEM DESCRIPTION:</h2>
                <p>{item.description}</p>
              </div>
              <div className="item__card__category">
                <h2>CATEGORY:</h2>
                <p>{item.category}</p>
              </div>
            </div>
            <div className="item__card__right_column">
              <div className="item__card__stock-container">
                <div className="item__card__status">
                  <h2>STATUS:</h2>
                  <Tags status={item.status}></Tags>
                </div>
                <div className="item__card__quantity">
                  <h2>QUANTITY:</h2>
                  <p>{item.quantity}</p>
                </div>
              </div>
              <div className="item__card__warehouse">
                <h2>WAREHOUSE:</h2>
                <p>{item.warehouse_name}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading item details</div>
        )}
      </div>
    </>
  );
};

export default ItemDetailsCard;
