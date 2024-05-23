import "./Tags.scss";

import React from "react";

//importing relevant components to display on page
import CTAs from "../../components/CTAs/CTAs";

const Tags = ({ status }) => (
  <div className={`tags tags{$status}`}>
    {/* TODO decide to use CTAs component or not
    <CTAs
      label={status}
      onClick={(event) => handleButtonClick("status", event)}
    /> */}
  </div>
);

export default Tags;
