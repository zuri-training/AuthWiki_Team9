import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIDAuthLib } from "../store/authlibId/authlibIDSlice";
import { Navigate } from "react-router-dom";

const AuthLib = () => {
  const { authlibId } = useParams();
  const dispatch = useDispatch();
  const { notFound } = useSelector((state) => state.authlibID);
  useEffect(() => {
    dispatch(getIDAuthLib(authlibId));
  }, [authlibId, dispatch]);

  if (notFound) {
    return <Navigate to="/dashboard" />;
  }
  return <h1>AuthLib</h1>;
};

export default AuthLib;
