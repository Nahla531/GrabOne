import React from "react";

const DropdownItem = ({ locationName, link, className }) => {
  return (
    <li>
      <a href={link} className={className}>
        {locationName}
      </a>
    </li>
  );
};

export default DropdownItem;
