import { registerUser } from "../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Container from "../css/Login";
import Form from "../components/Form";
import Google from "../icons/Google";
import Github from "../icons/Github";
import LoginSVG from "../icons/LoginSVG";
import { Link } from "react-router-dom";

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
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  // return (
  //   <div>
  //     <h1>Register Page</h1>
  //     <form>
  //       <input
  //         type="email"
  //         name="email"
  //         value={values.email}
  //         onChange={onChange}
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         name="firstName"
  //         value={values.firstName}
  //         onChange={onChange}
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         name="lastName"
  //         value={values.lastName}
  //         onChange={onChange}
  //       />
  //       <br />
  //       <input
  //         type="password"
  //         name="password"
  //         value={values.password}
  //         onChange={onChange}
  //       />
  //       <br />
  //       <button type="submit" onClick={onSubmit}>
  //         Register
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <Container>
      <section className="section">
        <h1 className="display-text">Create an Account with AuthIt</h1>
        <div className="login-container">
          <div className="login-item">
            <form>
              <Form
                labelText="First Name"
                type="text"
                _name="firstName"
                placeholder="John"
                handleChange={handleChange}
              />
              <Form
                labelText="Last Name"
                type="text"
                _name="lastName"
                placeholder="Mark"
                handleChange={handleChange}
              />
              <Form
                labelText="Email"
                type="email"
                _name="email"
                placeholder="example@example.com"
                handleChange={handleChange}
              />
              <Form
                labelText="Password"
                type="password"
                _name="password"
                placeholder="Password"
                handleChange={handleChange}
                diff={true}
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

export default Register;
