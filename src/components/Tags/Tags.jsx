import "./Tags.scss";

import React from "react";

/* optional cancel button if form requires it */
const Tags = ({ status }) => (
  <div className={`tags tags{$status}`}>
    <Button
      label="cancel"
      onClick={(event) => handleButtonClick("cancel", event)}
    />
  </div>
);

export default Tags;
