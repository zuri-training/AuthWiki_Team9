import { registerUser } from "../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Container from "../css/Login";
import Form from "../components/Form";
import LoginSVG from "../icons/LoginSVG";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    username: "",
    isMember: "",
    showPassword: true,
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, firstName, lastName, password, username } = values;
    if (!email || !firstName || !lastName || !password || !username) {
      toast.error("Please fill out all the fields");
      return;
    }
    dispatch(registerUser({ email, firstName, lastName, password, username }));
    return;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const setShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Container>
      <section className="section">
        <h1 className="display-text">Create an Account with AuthWiki</h1>
        <div className="login-container">
          <div className="login-item">
            <form>
              <Form
                labelText="First Name"
                type="text"
                _name="firstName"
                placeholder="John"
                handleChange={handleChange}
                value={values.firstName}
              />
              <Form
                labelText="Last Name"
                type="text"
                _name="lastName"
                placeholder="Mark"
                handleChange={handleChange}
                value={values.lastName}
              />
              <Form
                labelText="Email"
                type="email"
                _name="email"
                placeholder="example@example.com"
                handleChange={handleChange}
                value={values.email}
              />
              <Form
                labelText="User Name"
                type="text"
                _name="username"
                placeholder="username"
                handleChange={handleChange}
                value={values.username}
              />
              <Form
                labelText="Password"
                type={values.showPassword ? "password" : "text"}
                _name="password"
                placeholder="Password"
                handleChange={handleChange}
                value={values.password}
                diff={true}
                showPassword={values.showPassword}
                setShowPassword={setShowPassword}
              />
              <button type="submit" className="submit-btn" onClick={onSubmit}>
                Create Account
              </button>
            </form>
            <div className="cta-section">
              <p className="cta">
                Already have an account ?{" "}
                <Link to="/login" className="sign-up">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="login-item login-item-svg">
            <LoginSVG />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Register;
