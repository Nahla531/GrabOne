import React from "react";
import { data } from "../fakeData";
import ListingItem from "./ListingItem";
const Listing = ({ isLarge }) => {
  return (
    <>
      {data.map((data) => {
        return (
          <ListingItem
            key={data.id}
            id={data.id}
            price={data.price}
            title={data.title}
            description={data.description}
            location={data.location}
            img={data.image}
            isLarge={isLarge}
            isCollection={data.isCollection}
            count={data.count}
            vendorName={data.vendorName}
          />
        );
      })}
    </>
  );
};

export default Listing;
