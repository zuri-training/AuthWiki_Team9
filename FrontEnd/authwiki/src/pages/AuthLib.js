import { Link, useParams } from "react-router-dom";

const AuthLib = () => {
  const { authlibId } = useParams();
  console.log(authlibId);
  return <h1>AuthLib</h1>;
};

export default AuthLib;
