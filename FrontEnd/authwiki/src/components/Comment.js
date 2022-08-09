import "../css/Comment.css";
import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [storeComment, setStoreCooment] = useState([]);

  const addComment = () => {
    const newStoreComment = [...storeComment, comment];
    setStoreCooment(newStoreComment);
  };

  const handleLike = () => {
    // implementation
  };


  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="container">
      <div className="input-container">
        <input type="text" placeholder="Comment.." onChange={handleChange} />
        <button className="btn" onClick={addComment}>
          Comment
        </button>
      </div>
      {storeComment.map((item, key) => (
        <div className="comment-container">
          <div className="user">
            <img src="user.jpg" alt="user" className="image" />
            <h3 className="title">Bilal</h3>
            <p>Senior Backend developer</p>
          </div>
          <p className="comment">{item}</p>
          <div className="likes">
            <BiLike
              onClick={handleLike}
              className="like"
              style={{ color: like && "green" }}
            />
            <span>Like</span> |{" "}
            <BiDislike
              onClick={handleLike}
              className="dislike"
              style={{ color: disLike && "green" }}
            />
            <span> Dislike</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
