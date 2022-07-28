import ErrorContainer from "../css/Error";
import { Link } from "react-router-dom";
import Pana from "../icons/Pana";
const Error = () => {
  return (
    <ErrorContainer>
      <div className="wrapper">
        <div>
          <Pana />
          {/* <img src="pana/pana.svg" alt="404"> */}
        </div>
        <h2>Oops! </h2>
        <h4>It seems something went wrong.</h4>
        <button type="button" className="main-btn">
          <Link to="/">Return to homepage</Link>
        </button>
      </div>
    </ErrorContainer>
  );
};

export default Error;
