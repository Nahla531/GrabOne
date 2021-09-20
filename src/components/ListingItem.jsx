import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";

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
  vendorName,
}) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Col>
      <Card
        style={{ width: "" }}
        className={`listing ${isLarge ? "listing-large" : "listing-small"}`}
      >
        <Card.Img variant="top" src={img} alt={description} />

        <Card.Body>
          <Card.Title className="listing-header">
            {truncate(title, 20)}
          </Card.Title>
          {description && (
            <Card.Subtitle className="mb-2 listing-vendor-name">
              {vendorName}
            </Card.Subtitle>
          )}
          {location && <Card.Text>{location}</Card.Text>}
          {count && <div className="listing-purchase-count">{count}</div>}
          <div className="listing-price-container">
            {isCollection ? (
              <Button className="offer-btn">view more</Button>
            ) : (
              <>
                <span className="listing-price-from">from</span>
                <div className="listing-price-current">
                  <span className="listing-price-value">{price}</span>
                  {price}
                </div>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListingItem;
