import CommentCSS from "../css/Comment.js";
import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import moment from "moment";
import { upVote, downVote } from "../store/authlibId/authlibIDSlice.js";
import { useDispatch } from "react-redux";

const Comment = ({
  id,
  author_name,
  comment_body,
  downvote_user,
  upvote_user,
  date_created,
}) => {
  const dispatch = useDispatch();
  const date = moment(date_created).format("MMMM Do YYYY, h:mm a");
  function getFirstLetters(str) {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstLetters;
  }
  return (
    <CommentCSS>
      <div className="container">
        <div className="comment-container">
          <div className="user">
            <div className="profile-name">{getFirstLetters(author_name)}</div>
            <h3 className="author">
              {author_name} commented on {date}{" "}
            </h3>
          </div>
          <p className="comment">{comment_body} </p>
          <div className="likes">
            <div>
              <BiLike className="like" style={{}} />
              <span>{downvote_user.length}</span>
            </div>
            <div>
              <BiDislike className="dislike" style={{}} />
              <span> {upvote_user.length}</span>
            </div>
          </div>
        </div>
      </div>
    </CommentCSS>
  );
};

export default Comment;
