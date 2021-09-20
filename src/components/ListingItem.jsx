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
  wishlist = true,
  isNew = false,
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
        <div className="listing-touch-info"></div>

        <Card.Img variant="top" src={img} alt={description} />
        <div className="listing-paragraph">
          <p>{truncate(description, 90)}</p>
        </div>
        <Card.Body className="listing-card-body">
          <Card.Title className="listing-header">
            {truncate(title, 25)}
          </Card.Title>
          {description && (
            <Card.Subtitle className="mb-2 listing-vendor-name">
              <span> {vendorName}</span>

              {location && <span className="listing-location">{location}</span>}
            </Card.Subtitle>
          )}
          <div
            className={`listing-flex ${
              isCollection ? "btn-center" : (isNew = true)
            }`}
          >
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
        {/* <div className="listing-badge">
          <img
            src="https://main-cdn.grabone.co.nz/goimage/True/33622e847e2afad488cf1c054615a3698c8d9d2d.png"
            alt=""
          />
        </div> */}
        {wishlist && <div className="wishlist-btn"></div>}
      </Card>
    </Col>
  );
};

export default ListingItem;
