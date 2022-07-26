import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/user/userSlice";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(...values);
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <br />
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
