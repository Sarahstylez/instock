import "./Tags.scss";
import React from "react";

// Function to remove space and lower case status values "In Stock" and "Out of Stock" to use as classname
function formatStatus(input) {
  return input.replace(/\s+/g, "").toLowerCase();
}

const Tags = ({ status }) => {
  const formattedStatus = formatStatus(status);
  return <h4 className={`tag tag--${formattedStatus}`}>{status}</h4>;
};

export default Tags;
