import React from "react";
import { Col } from "react-bootstrap";

const ListingItem = ({
  id,
  title,
  price,
  description,
  location,
  img,
  isLarge,
  isCollection,
  count,
}) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return <Col></Col>;
};

export default ListingItem;
