const Form = ({
  labelText,
  type,
  placeholder,
  handleChange,
  _name,
  diff = false,
}) => {
  return (
    <div className="input-item">
      <label htmlFor="" className="label-text">
        {labelText}
      </label>
      <input
        type={type}
        name={_name}
        className="input-box"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {diff && <Terms />}
    </div>
  );
};

const Terms = () => {
  return (
    <div className="terms">
      <span className="condition">
        *Password should be at least 8 character
      </span>
      <p>
        <input type="checkbox" className="checkbox" />
        <span>
          By signing up you agree to our {"  "}
          <a href="me.com" className="sign-up">
            End User License Agreement
          </a>{" "}
          and our {"  "}
          <a href="me.com" className="sign-up">
            Privacy Policy
          </a>
        </span>
      </p>
    </div>
  );
};

export default Form;
