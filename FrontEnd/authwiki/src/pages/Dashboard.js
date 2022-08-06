import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAuthLib } from "../store/authlib/authlibSlice";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar";
const Dashboard = () => {
  const { isLoading, authlib } = useSelector((state) => state.authlib);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthLib());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (authlib.length > 2000) {
    return (
      <ul>
        {authlib.map((item) => {
          return (
            <li key={item.id}>
              <h2>
                {item.name}
                <span>
                  <Link to={`/authlib/${item.id}`}> View</Link>
                </span>
              </h2>
            </li>
          );
        })}
      </ul>
    );
  }
  return <h2>sgsdgsadadad</h2>;
};

export default Dashboard;
