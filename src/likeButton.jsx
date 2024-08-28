import { useState } from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [countLike , setcountLike] = useState(0);
  let styles = {color:"red"}
  const toggleLike = () => {
    setIsLiked(!isLiked);
    setcountLike(countLike + 1);
  };

  return (
    <div>
        <p>LikeCount = {countLike}</p>
      <p onClick={toggleLike}>
        
       {
        isLiked ? (<i className="fa-solid fa-heart" style={styles}></i>   ) 
        : (<i className="fa-regular fa-heart"></i>)
       }
        
      </p>
    </div>
  );
}

export default LikeButton;