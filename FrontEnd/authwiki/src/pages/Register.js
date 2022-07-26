import { registerUser } from "../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Register = () => {
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isMember: "",
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, firstName, lastName, password } = values;
    dispatch(registerUser({ email, firstName, lastName, password }));
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />{" "}
        <br />
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={onChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <br />
        <button type="submit" onClick={onSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
