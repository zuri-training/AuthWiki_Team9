import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import ProfileCSS from "../css/Profile";
import edit from "../images/icons/edit.png";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const initialState = {
    email: user.email || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    username: user.username || "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <ProfileCSS>
      <div className="form">
        <form>
          <ProfileForm
            labelText="Email"
            name="email"
            placeholder="email"
            handleChange={handleChange}
            value={values.email}
          ></ProfileForm>
          <ProfileForm
            labelText="First Name"
            name="firstName"
            placeholder="firstName"
            handleChange={handleChange}
            value={values.firstName}
          ></ProfileForm>
          <ProfileForm
            labelText="Last Name"
            name="lastName"
            placeholder="lastName"
            handleChange={handleChange}
            value={values.lastName}
          ></ProfileForm>
          <ProfileForm
            labelText="Username"
            name="username"
            placeholder="username"
            handleChange={handleChange}
            value={values.username}
          ></ProfileForm>
          <div className="input-item">
            <button className="btn">
              <img src={edit} />
              Edit
            </button>
          </div>
        </form>
      </div>
    </ProfileCSS>
  );
};

export default Profile;
