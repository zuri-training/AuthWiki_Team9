import React from "react";
import SingleAuthLIbraryCSS from "../css/SingleAuthLIbrary";
import jwt from "../images/icons/jwt.png";
import comments from "../images/icons/comments.png";
import download from "../images/icons/downloads.png";

const SingleAuthLIbrary = ({
  id,
  name,
  description,
  image,
  comment,
  no_of_downloads,
}) => {
  return (
    <SingleAuthLIbraryCSS>
      <div className="container">
        <main>
          <section>
            <div className="passport">
              <div className="details">
                <div className="image">
                  <img src={jwt} alt="passport" />
                  <h1>{name}</h1>
                </div>
                <div>
                  <p>{description.substring(0, 155)}...</p>
                </div>
              </div>
              <div className="comment">
                <div className="download">
                  <p>
                    <img src={comments} />
                    {comment.length}
                  </p>
                </div>
                <div className="download">
                  <p>
                    <img src={download} />
                    {no_of_downloads}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SingleAuthLIbraryCSS>
  );
};

export default SingleAuthLIbrary;
