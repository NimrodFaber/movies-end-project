import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="py-2 bg-warning border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"/"}>
                movies <i className="bi bi-upc"></i>for you
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"about"}>
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"favoriets"}>
                favoriets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"about"}>
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"about"}>
                home
              </NavLink>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"Signin"}>
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"signup"}>
                sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom bg-dark">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-warning text-decoration-none"
          >
            <span className="fs-4">Best Movies</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
