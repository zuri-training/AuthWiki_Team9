import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/user/userSlice";
import Google from "../icons/Google";
import Github from "../icons/Github";
import LoginSVG from "../icons/LoginSVG";
import Container from "../css/Login";

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
  // return (
  //   <div>
  //     <h1>Login Page</h1>
  //     <form>
  //       <input
  //         type="email"
  //         name="email"
  //         value={values.email}
  //         onChange={onChange}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         value={values.password}
  //         onChange={onChange}
  //       />
  //       <br />
  //       <button type="submit" onClick={onSubmit}>
  //         Login
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <Container>
      <section className="section">
        <h1 className="display-text">Log In to your AuthIt Account</h1>

        <div className="login-container">
          <div className="login-item">
            <form>
              <div className="input-item">
                <label htmlFor="" className="label-text">
                  Email Address
                </label>
                <input
                  type="email"
                  className="input-box"
                  placeholder="example@example.com"
                />
              </div>
              <div className="input-item">
                <label htmlFor="" className="label-text">
                  Password
                </label>
                <input
                  type="password"
                  className="input-box"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <div className="cta-section">
              <p className="cta">
                Don't have an account?{" "}
                <a href="https://www.google.com/" className="sign-up">
                  Sign Up
                </a>
              </p>
              <div className="socials">
                <a className="social-login" href="https://www.google.com/">
                  <Google />
                  Sign up with Google
                </a>
                <a className="social-login" href="https://www.google.com/">
                  <Github />
                  Sign up with Github
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
