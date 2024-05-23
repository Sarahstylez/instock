import "./Tags.scss";

import React from "react";

const Tags = ({ status }) => <h4 className={`tag tag--${status}`}>in stock</h4>;

export default Tags;
