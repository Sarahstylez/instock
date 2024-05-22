import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ItemDetailsCard.scss";

const ItemDetailsCard = (itemId) => {
  const [isEditing, setIsEditing] = useState(false);

  // use effect to load item details
  useEffect(() => {
    console.log("Things are being loaded");
  });

  // handle edit functionality
  const editClick = () => {
    console.log("Edit being click");
  };

  // handle navigate back to item details list
  const backClick = () => {
    console.log("Back being click");
  };

  return (
    <>
      <div className="item__card">
        <div className="item__card__header">
          <button
            className="item__card__back-arrow"
            onClick={() => {}}
          ></button>
          <h1 className="item__card__name">Television</h1>
          <button className="item__card__edit" onClick={() => {}}></button>
        </div>
        <div className="item__card__divider"></div>
        <div className="item__card__details">
          <div className="item__card__left_column">
            <div className="item__card__description">
              <h2 className="">ITEM DESCRIPTION:</h2>
              {/* Fetch  here */}
              <p>
                This 50", 4K LED TV provides a crystal-clear picture and vivid
                colors.
              </p>
            </div>
            <div className="item__card__category">
              {/* Fetch  here */}
              <h2>CATEGORY:</h2>
              <p>Electronics</p>
            </div>
          </div>
          <div className="item__card__right-column">
            {/* Fetch  here */}
            <div className="item__card__stock-container">
              <div className="item__card__status">
                <h2>STATUS:</h2>
                <p className="item__card__in-stock">IN STOCK</p>
              </div>
              <div className="item__card__quantity">
                <h2>QUANTITY:</h2>
                {/* Fetch  here */}
                <p>500</p>
              </div>
            </div>
            <div className="item__card__warehouse">
              {/* Fetch  here */}
              <h2>WAREHOUSE:</h2>
              <p>Manhattan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsCard;
