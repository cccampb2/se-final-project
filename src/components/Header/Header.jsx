import "./Header.css";
import { Link, useLocation } from "react-router";
import logout_dark from "../../assets/logout.svg";
import logout_white from "../../assets/logout-white.svg";

function Header({ isLoggedIn, handleOverlay, currentUser, handleSignOut }) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === "/saved-articles" ? "header-saved-articles" : ""
      }`}
    >
      <div className="header__items">
        <div
          className={`header__title ${
            location.pathname === "/saved-articles"
              ? "header__title-saved-articles"
              : ""
          }`}
        >
          NewsExplorer
        </div>
        <nav className="header__navbar">
          <ul className="nav__items">
            <li className="nav__item">
              <Link
                className={`nav__link ${
                  location.pathname === "/saved-articles"
                    ? "nav__link-saved-articles"
                    : ""
                } `}
                to="/"
              >
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    location.pathname === "/saved-articles"
                      ? "nav__link-saved-articles"
                      : ""
                  } `}
                  to="/saved-articles"
                >
                  Saved Articles
                </Link>
              </li>
            )}
          </ul>

          {isLoggedIn && (
            <button
              onClick={handleSignOut}
              className={`nav__log-out-btn ${
                location.pathname === "/saved-articles"
                  ? "nav__log-out-btn-saved-articles"
                  : ""
              }`}
            >
              {currentUser.name}{" "}
              {location.pathname === "/saved-articles" && (
                <img
                  src={logout_dark}
                  alt="logout icon"
                  className="nav__log-out-btn-img"
                />
              )}
              {location.pathname !== "/saved-articles" && (
                <img
                  src={logout_white}
                  alt="logout icon"
                  className="nav__log-out-btn-img"
                />
              )}
            </button>
          )}

          {!isLoggedIn && (
            <button
              onClick={() => {
                handleOverlay("login");
              }}
              className="nav__sign-in-btn"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
