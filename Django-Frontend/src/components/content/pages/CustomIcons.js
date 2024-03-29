import React from "react";
import * as Icons from "react-icons/fa";

/* Your icon name from database data can now be passed as prop */
export const CustomIcons = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
};

