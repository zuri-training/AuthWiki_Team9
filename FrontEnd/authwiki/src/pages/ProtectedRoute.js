import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  if (!user) {
    console.log(user);
    return <Navigate to="/" />;
  }
  console.log(user);
  return children;
};

export default ProtectedRoute;
