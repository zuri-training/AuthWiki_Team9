import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthLib } from "../store/authlib/authlibSlice";

const Dashboard = () => {
  const { isLoading, authlib } = useSelector((state) => state.authlib);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthLib());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (authlib.length > 0) {
    return <h3>afafaf</h3>;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
