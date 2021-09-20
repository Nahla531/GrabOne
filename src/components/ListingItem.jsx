import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import "../Card.css";
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
        className={`listing ${isLarge ? "listing-large" : "listing-small"} ${
          isCollection ? "text-center listing-collection" : ""
        }`}
      >
        <Card.Img variant="top" src={img} alt={description} />
        <div className="listing-paragraph">
          <p>{truncate(description, 90)}</p>
        </div>
        <Card.Body className="listing-card-body">
          <Card.Title className="listing-header">
            {truncate(title, 30)}
          </Card.Title>
          {description && (
            <Card.Subtitle className="mb-2 listing-vendor-name">
              <span> {vendorName}</span>

              {location && <span className="listing-location">{location}</span>}
            </Card.Subtitle>
          )}
          <div className={`listing-flex ${isCollection ? "btn-center" : ""}`}>
            {count && (
              <div className="listing-purchase-count">{count} bought</div>
            )}
            <div className="listing-price-container">
              {isCollection ? (
                <Button className="offer-btn">view collection</Button>
              ) : (
                <>
                  <span className="listing-price-from">from</span>
                  <div className="listing-price-current">
                    <span className="listing-price-value">${price}</span>$
                    {price}
                  </div>
                </>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListingItem;
