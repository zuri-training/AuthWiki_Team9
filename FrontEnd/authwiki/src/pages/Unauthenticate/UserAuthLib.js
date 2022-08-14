import React from "react";
import Code from "../../components/Code";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIDAuthLib } from "../../store/authlibId/authlibIDSlice";
import { Navigate } from "react-router-dom";
import AuthLibCSS from "./AuthLib";
import Loader from "../../components/Loader";
import { ImCodepen } from "react-icons/im";

const AuthLib = () => {
  const { authlibId } = useParams();
  const dispatch = useDispatch();
  const { notFound, authlib, isLoading } = useSelector(
    (state) => state.authlibID
  );

  useEffect(() => {
    dispatch(getIDAuthLib(authlibId));
  }, [authlibId, dispatch]);

  if (notFound) {
    return <Navigate to="/library" />;
  }
  if (isLoading) {
    return <Loader />;
  }
  const {
    code_snippet,
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
          <div className="join-now">
            <h1>Sign Up on AuthWiki</h1>
            <p>With a free account, you can do more. </p>

            <Link className="btn" to="/register">
              Sign Up
            </Link>
            <p className="login">
              Already have an account ? <Link to="/login">Log In</Link>
            </p>
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
