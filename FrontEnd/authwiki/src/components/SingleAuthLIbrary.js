import React from "react";
import SingleAuthLIbraryCSS from "../css/SingleAuthLIbrary";
import { FaCommentAlt, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                  <Link to={`/authlib/${id}`}>
                    <img src={image} alt="passport" className="auth-image" />
                  </Link>
                  <h1>
                    <Link to={`/authlib/${id}`}>{name}</Link>
                  </h1>
                </div>
                <div>
                  <p>{description.substring(0, 155)}...</p>
                </div>
              </div>
              <div className="comment">
                <div className="download">
                  <p>
                    <FaCommentAlt />
                    {comment.length}
                  </p>
                </div>
                <div className="download">
                  <p>
                    <FaDownload />
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
