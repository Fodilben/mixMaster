import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const Error = () => {
  const err = useRouteError();
  if (err.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <p>there is no page</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return <h2>something went wrong</h2>;
};
export default Error;
