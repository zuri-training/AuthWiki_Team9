import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthLib } from "../store/authlib/authlibSlice";
import Loader from "../components/Loader";
import UnAuthSingleAuthLIbrary from "../components/UnAuthSingleAuthLIbrary";
import AllAuthLibList from "../css/AllAuthLibList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const AllAuthLib = () => {
  const { isLoading, authlib } = useSelector((state) => state.authlib);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthLib());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <AllAuthLibList>
        {authlib.length > 0 &&
          authlib.map((item) => {
            return <UnAuthSingleAuthLIbrary key={item.id} {...item} />;
          })}
      </AllAuthLibList>
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
};

export default AllAuthLib;
