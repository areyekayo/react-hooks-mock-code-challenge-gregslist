import React, {useState} from "react";

function Search({handleSearch}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(search);
  }

  function onSearchChange(event){
    setSearch(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
