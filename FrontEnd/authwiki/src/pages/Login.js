import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/user/userSlice";
import Google from "../icons/Google";
import Github from "../icons/Github";
import LoginSVG from "../icons/LoginSVG";
import Container from "../css/Login";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import { toast } from "react-toastify";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
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
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please fill out all the fields");
      return;
    }
    dispatch(loginUser({ email, password }));
    return;
  };
  return (
    <Container>
      <section className="section">
        <h1 className="display-text">Log In to your AuthIt Account</h1>
        <div className="login-container">
          <div className="login-item">
            <form>
              <Form
                labelText="Email"
                type="email"
                placeholder="example@example.com"
                handleChange={handleChange}
                value={values.email}
                _name="email"
              />
              <Form
                labelText="Password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                value={values.password}
                _name="password"
              />
              <button type="submit" className="submit-btn" onClick={onSubmit}>
                Log In
              </button>
            </form>
            <div className="cta-section">
              <p className="cta">
                Don't have an account?{" "}
                <Link to="/register" className="sign-up">
                  Sign Up
                </Link>
              </p>
              <div className="socials">
                <a className="social-login" href="https://www.google.com/">
                  <Google />
                  Login with Google
                </a>
                <a className="social-login" href="https://www.google.com/">
                  <Github />
                  Login with Github
                </a>
              </div>
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

export default Login;
