import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">mixMaster</div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
          <NavLink to="about" className="nav-link">
            about
          </NavLink>
          <NavLink to="Newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
