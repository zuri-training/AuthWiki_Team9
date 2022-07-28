import ErrorContainer from "../css/Error";
import { Link } from "react-router-dom";
import Pana from "../icons/Pana";
const Error = () => {
  return (
    <ErrorContainer>
      <div className="wrapper">
        <div>
          <Pana />
        </div>
        <h2>Oops! </h2>
        <h4>It seems something went wrong</h4>
        <Link to="/" className="main-btn">
          Return to Homepage
        </Link>
      </div>
    </ErrorContainer>
  );
};

export default Error;
