import React from "react";

const NotFound = (props) => {
  console.log(props);

  return (
    <div>
      Page not found: {props.location.href}
    </div>
  );
};

export default NotFound;
