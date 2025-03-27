import React, {useState} from "react";

function ListingCard({description, image, location}) {
  //set state for liked items
  const [isLiked, setLike] = useState(false)

  //function to handle like clicking
  function handleLikeClick() {
    setLike(!isLiked)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
