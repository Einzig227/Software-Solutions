import { NavLink } from "react-router-dom";
import logo from "../../public/images/software-solutions.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="Software Solutions logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            area-aria-controls="nav"
            area-aria-label="Expand Navigation"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="nav"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/"
                >
                  Company
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/news"
                >
                  News
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/service"
                >
                  Products & Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/research"
                >
                  Research
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
