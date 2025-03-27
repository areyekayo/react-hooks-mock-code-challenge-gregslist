import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  //initial fetch to render listings
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  }, []);

  //callback function to delete items to pass as prop to ListingsContainer
  function handleDeleteItem(updatedListing){
    setListings(updatedListing)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
