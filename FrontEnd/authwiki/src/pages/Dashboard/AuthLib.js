import React, { useState } from "react";
import Code from "../../components/Code";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIDAuthLib } from "../../store/authlibId/authlibIDSlice";
import { Navigate } from "react-router-dom";
import AuthLibCSS from "../../css/AuthLib";
import Loader from "../../components/Loader";
import { ImCodepen } from "react-icons/im";
import Comment from "../../components/Comment";
import { FaDownload } from "react-icons/fa";
import sample from "../../images/icons/sample.png";

const AuthLib = () => {
  const { authlibId } = useParams();
  const dispatch = useDispatch();
  const { notFound, authlib, isLoading } = useSelector(
    (state) => state.authlibID
  );
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    dispatch(getIDAuthLib(authlibId));
  }, [authlibId, dispatch]);

  if (notFound) {
    return <Navigate to="/dashboard" />;
  }
  if (isLoading) {
    return <Loader />;
  }
  const {
    code_snippet,
    comment,
    created_by,
    description,
    image,
    language,
    name,
    version,
    repo_link,
    license,
    install_desc,
    install_snippets,
    dependency,
  } = authlib;

  return (
    <AuthLibCSS>
      <div className="single-page">
        <div className="cta-section">
          <img id="mg" src={image} alt={name} />
          <h1>{name}</h1>
        </div>
        <div id="auth">
          <div id="aut">
            <center>By {created_by}</center>
          </div>
          <p>
            License:<span> {license}</span>
          </p>
          <p>
            Codestyle:<span> Standard</span>
          </p>
          <p>
            Version:<span> {version}</span>
          </p>
          <p>
            <a href={repo_link} target="_blank" rel="noreferrer">
              View Repository
            </a>
            <a
              id="btn"
              className="download-btn"
              href={sample}
              download={`${name}.${language ? "js" : "py"}`}
              style={{
                backgroundColor: "#2eb394",
                color: "#09241E",
                borderRadius: "5px",
                border: "none",
                float: "right",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 10px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <FaDownload size="20px" />
              Download
            </a>
          </p>

          <div className="description">
            <center>
              <p>{description}</p>
            </center>
          </div>
          <div className="depend">
            <div className="title">
              <ImCodepen size="25px" />
              <p>Dependency</p>
            </div>
            <div>
              <h3 className="depend-title">{name} requires the following:</h3>
              <ul className="dependency">
                {dependency?.map((item) => {
                  return <li key={item.id}>{item.title}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="install">
            <h4>Installation</h4>
            <div id="installation">
              <p>{install_desc}</p>
              <Code code={install_snippets} language={language} />
            </div>
          </div>
          <div>
            <h4>Example</h4>
            {code_snippet?.map((item) => {
              return (
                <div className="install" key={item.id}>
                  <div id="installation">
                    <p>{item.title}</p>
                    <Code code={item.description} language={language} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment">
            <h4>Comment</h4>
            <div className="input-container">
              <input type="text" placeholder="Comment.." />
              <button className="btn">Comment</button>
            </div>

            <div id="installation">
              <button
                className="comment-view"
                onClick={() => setShowComment(!showComment)}
              >
                {showComment ? "Show Less Comment" : "Show More Comment"}
              </button>
              {showComment &&
                comment?.map((item) => {
                  return <Comment key={item.id} {...item}></Comment>;
                })}
            </div>
          </div>

          <div id="security">
            <h4>Security</h4>
            <p>
              Security issues are handled under the supervision of the AuthWiki
              Security Team. Please report security issues by emailing
              <span className="tag"> alert@authwiki.com </span>. The project
              maintainers will then work with you to resolve any issues where
              required, prior to any public disclosure.
            </p>
          </div>
          <div className="license">
            <h4>License</h4>
            <p>
              <span>
                Copyright &copy; 2022 - present, AuthWiki. All rights reserved.
              </span>
              <br></br>
              Redistribution and use in source and binary forms, with or without
              modification, are permitted. Redistributions of source code must
              retain the above copyright notice.
            </p>
          </div>
        </div>
      </div>
    </AuthLibCSS>
  );
};

export default AuthLib;
