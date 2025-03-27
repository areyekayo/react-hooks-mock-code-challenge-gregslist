import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteItem}) {
  
  //function to filter out deleted items and call handleDeleteItem to set new state
  function deleteItem(deletedId){
    const updatedItems = listings.filter((item) => item.id !== deletedId);
    handleDeleteItem(updatedItems);
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((item) => <ListingCard key={item.id} id={item.id} image={item.image} description={item.description} location={item.location}
          onDeleteItem={deleteItem}  />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
