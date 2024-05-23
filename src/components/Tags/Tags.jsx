import "./Tags.scss";

import React from "react";

const Tags = ({ status }) => <div className={`tags tags--{$status}`}></div>;

export default Tags;
