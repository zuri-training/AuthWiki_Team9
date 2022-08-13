import React from "react";
import UnAuthSingleAuthLIbraryCSS from "../css/UnAuthSingleAuthLIbrary";
import { FaCommentAlt, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const UnAuthSingleAuthLIbrary = ({
  id,
  name,
  description,
  image,
  comment,
  no_of_downloads,
}) => {
  return (
    <UnAuthSingleAuthLIbraryCSS>
      <div className="container">
        <section>
          <div className="item">
            <div className="details">
              <div className="image">
                <Link to={`/library/${id}`}>
                  <img src={image} alt="passport" className="auth-image" />
                </Link>
                <h1>
                  <Link to={`/library/${id}`}>{name}</Link>
                </h1>
              </div>
              <div>
                <p>{description.substring(0, 135)}...</p>
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
      </div>
    </UnAuthSingleAuthLIbraryCSS>
  );
};

export default UnAuthSingleAuthLIbrary;
