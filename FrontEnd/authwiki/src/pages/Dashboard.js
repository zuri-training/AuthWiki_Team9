import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthLib } from "../store/authlib/authlibSlice";
import Loader from "../components/Loader";
import SingleAuthLIbrary from "../components/SingleAuthLIbrary";
import AuthLibList from "../css/AuthLibList";

const Dashboard = () => {
  const { isLoading, authlib } = useSelector((state) => state.authlib);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthLib());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (authlib.length > 0) {
    return (
      <AuthLibList>
        {authlib.map((item) => {
          return <SingleAuthLIbrary key={item.id} {...item} />;
        })}
      </AuthLibList>
    );
  }
};

export default Dashboard;
