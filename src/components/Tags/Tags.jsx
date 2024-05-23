import "./Tags.scss";

import React from "react";

const Tags = ({ status }) => <div className={`tag tag--{$status}`}></div>;

export default Tags;
