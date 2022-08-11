import styled from "styled-components";

const CommentCSS = styled.div`
  .container {
    width: 80%;
    margin: 0 auto;
  }

  .author {
    font-size: 16px;
  }

  .comment-container {
    margin-top: 1.5em;
    border-radius: 16px;
    border: 2px solid #06223f;
    color: #fdfef8;
    padding: 15px;
  }

  .user {
    padding: 0.5em;
    color: #d9d9d9;
    border-bottom: 3px solid #06223f;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .profile-name {
    background-color: #06223f;
    border-radius: 50%;
    padding: 9px;
    font-size: 20px;
    color: #d9d9d9;
  }
  .comment {
    background-color: #04172a;
    padding: 5px;
  }

  .likes {
    padding-top: 0.5em;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .likes div {
    display: flex;
    align-items: center;
    font-size: 20px;
    border-radius: 10px;
    border: 3px solid #06223f;
    padding: 5px;
  }
  .like,
  .dislike {
    font-size: 1.5em;
    cursor: pointer;
  }
  .like {
    margin-right: 0.5em;
  }

  .dislike {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  span {
    font-size: 1.2em;
    margin: 0;
    display: inline-block;
  }
`;

export default CommentCSS;
