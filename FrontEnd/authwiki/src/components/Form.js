const Form = ({
  labelText,
  type,
  placeholder,
  handleChange,
  _name,
  _value,
  diff = false,
  showPassword = false,
  setShowPassword = null,
}) => {
  return (
    <div className="input-item">
      <label htmlFor="" className="label-text">
        {labelText}
      </label>
      <input
        type={type}
        name={_name}
        className={"input-box"}
        placeholder={placeholder}
        onChange={handleChange}
        value={_value}
      />
      {diff && showPassword && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={setShowPassword}
          className="password"
        >
          <path
            d="M2.62003 11.255L3.33503 10.545C2.55214 9.84206 1.93702 8.97234 1.53503 8C2.55003 5.465 5.35003 3.5 8.00003 3.5C8.68198 3.509 9.35775 3.63064 10 3.86L10.775 3.08C9.89636 2.70866 8.95388 2.51167 8.00003 2.5C6.37029 2.56129 4.79423 3.09878 3.46663 4.04604C2.13904 4.99331 1.11811 6.30882 0.530031 7.83C0.490315 7.93985 0.490315 8.06015 0.530031 8.17C0.974155 9.34851 1.69025 10.4055 2.62003 11.255Z"
            fill="#A9A9A5"
          />
          <path
            d="M6 7.865C6.03477 7.38586 6.24084 6.93524 6.58054 6.59554C6.92024 6.25584 7.37086 6.04977 7.85 6.015L8.755 5.105C8.24788 4.97147 7.71462 4.97321 7.20838 5.11003C6.70214 5.24685 6.24061 5.51399 5.8698 5.8848C5.49899 6.25561 5.23185 6.71714 5.09503 7.22338C4.95821 7.72962 4.95647 8.26288 5.09 8.77L6 7.865ZM15.47 7.83C14.8967 6.3366 13.899 5.04351 12.6 4.11L15 1.705L14.295 1L1 14.295L1.705 15L4.255 12.45C5.39194 13.117 6.68202 13.4787 8 13.5C9.62974 13.4387 11.2058 12.9012 12.5334 11.954C13.861 11.0067 14.8819 9.69118 15.47 8.17C15.5097 8.06015 15.5097 7.93985 15.47 7.83ZM10 8C9.99789 8.35005 9.90395 8.69342 9.72755 8.99578C9.55116 9.29815 9.29849 9.54892 8.9948 9.72303C8.69112 9.89714 8.34705 9.9885 7.997 9.98797C7.64694 9.98744 7.30315 9.89503 7 9.72L9.72 7C9.89975 7.30287 9.99634 7.64783 10 8ZM8 12.5C6.95103 12.4817 5.92195 12.2107 5 11.71L6.27 10.44C6.84767 10.8408 7.54777 11.026 8.24807 10.9632C8.94836 10.9005 9.60436 10.5937 10.1015 10.0965C10.5987 9.59937 10.9055 8.94336 10.9682 8.24307C11.031 7.54277 10.8458 6.84267 10.445 6.265L11.88 4.83C13.0273 5.61749 13.9245 6.71771 14.465 8C13.45 10.535 10.65 12.5 8 12.5Z"
            fill="#A9A9A5"
          />
        </svg>
      )}
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
