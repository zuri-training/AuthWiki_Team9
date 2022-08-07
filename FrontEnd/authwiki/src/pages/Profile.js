import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import ProfileCSS from "../css/Profile";
import edit from "../images/icons/edit.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../store/user/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const initialState = {
    email: user.email || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    username: user.username || "",
  };
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, firstName, lastName, username } = values;
    if (!email || !firstName || !lastName || !username) {
      toast.error("Please fill out all the fields");
      return;
    }
    dispatch(updateUser({ email, firstName, lastName, username }));
    return;
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
          <button type="submit" className="btn-edit" onClick={onSubmit}>
            <img src={edit} />
            Edit
          </button>
        </form>
      </div>
    </ProfileCSS>
  );
};

export default Profile;
