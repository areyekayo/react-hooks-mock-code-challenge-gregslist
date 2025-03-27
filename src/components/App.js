import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchKey, setSearchKey] = useState("")

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

  //filter listings with search key
  const itemsToDisplay = listings.filter((item) => {
    if (!searchKey) {
      console.log("no search term", searchKey)
      return true
    }
    else {
      const searchCase = searchKey.toLowerCase();
      const itemCase = item.description.toLowerCase();
      return itemCase.includes(searchCase) || searchCase === "";
    }
  })

  function handleSearch(searchTerm){
    setSearchKey(searchTerm)
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer listings={itemsToDisplay} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
