import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="py-2 bg-warning border-bottom">
        <div class="container d-flex flex-wrap">
          <ul class="nav me-auto">
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"/"}>
                movies <i class="bi bi-upc"></i>for you
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"about"}>
                about
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"favoriets"}>
                favoriets
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"about"}>
                home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"about"}>
                home
              </NavLink>
            </li>
          </ul>
          <ul class="nav">
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"Signin"}>
                Sign In
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link link-dark px-2" to={"signup"}>
                home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <header class="py-3 mb-4 border-bottom bg-dark">
        <div class="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-warning text-decoration-none"
          >
            <span class="fs-4">Best Movies</span>
          </a>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>
          <button type="button" class="btn btn-warning">
            Warning
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
