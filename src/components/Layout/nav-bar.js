import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-success navbar-expand-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold">World Geo-Stats</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/users">
                Users
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/continents">
                Continents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/props">
                Props
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/states">
                States
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/payment">
                Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/test">
                TestPage
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
