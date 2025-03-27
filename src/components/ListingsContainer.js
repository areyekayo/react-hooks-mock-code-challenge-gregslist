import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  
  
  return (
    <main>
      <ul className="cards">
        {listings.map((item) => <ListingCard 
          key={item.id} 
          image={item.image}
          description={item.description}
          location={item.location}  />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
