import React, {useState} from "react";

function ListingCard({id, location, description, image, onDeleteItem}) {
  //set state for liked items
  const [isLiked, setLike] = useState(false)

  //function to handle like clicking
  function handleLikeClick() {
    setLike(!isLiked)
  }

  //function to send delete request
  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleLikeClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
