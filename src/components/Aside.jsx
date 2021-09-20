import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Aside = () => {
  const categories = [
    { type: "Featured Auckland deals", amount: 123 },
    { type: "Collections", amount: 32 },
    { type: "Escapes", amount: 56 },
    { type: "Picked for You", amount: 21 },
    { type: "Activities, Events & Outdoors", amount: 76 },
    { type: "Store", amount: 876 },
    { type: "Restaurants, Bars, Cafes", amount: 90 },
    { type: "House Garden", amount: 11 },
    { type: "Beauty, Massage & Spa", amount: 77 },
    { type: "Fitness Sport", amount: 1 },
    { type: "Automotive", amount: 112 },
  ];
  return (
    <aside id="aside">
      <header>Discover</header>
      <ListGroup>
        {categories.map((item) => {
          return (
            <ListGroupItem
              key={Math.random()}
              style={{
                border: "none",
                borderBottom: " 1px solid #f7f9fb",
                padding: 0,
              }}
            >
              <a href="#" className="discover-item-link">
                <span className="discover-name">{item.type}</span>
                <span className="deals-amount">{item.amount}</span>
              </a>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </aside>
  );
};

export default Aside;
