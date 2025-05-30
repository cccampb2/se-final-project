import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logout_dark from "../../assets/logout.svg";
import logout_white from "../../assets/logout-white.svg";

function Header({
  isLoggedIn,
  handleOverlay,
  currentUser,
  handleSignOut,
  isOpen,
}) {
  const location = useLocation();
  const onHomePage = location.pathname === "/";
  const onSavedArticlesPage = location.pathname === "/saved-articles";

  function handleExit() {
    handleOverlay("");
  }

  function handleOpen() {
    handleOverlay("mobile-menu");
  }

  return (
    <header
      className={`header ${onSavedArticlesPage ? "header-saved-articles" : ""}`}
    >
      <div className="header__items">
        <p
          className={`header__title ${
            onSavedArticlesPage ? "header__title-saved-articles" : ""
          }`}
        >
          NewsExplorer
        </p>
        <nav className="header__navbar">
          <ul className="nav__items">
            <li className="nav__item">
              <Link
                className={`nav__link ${
                  onSavedArticlesPage ? "nav__link-saved-articles" : ""
                } `}
                to="/"
              >
                Home
                <div
                  className={`nav__link-active-page ${
                    onHomePage ? "nav__link-active-page_home" : ""
                  }`}
                ></div>
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    onSavedArticlesPage ? "nav__link-saved-articles" : ""
                  } `}
                  to={`/saved-articles`}
                >
                  Saved Articles
                  <div
                    className={`nav__link-active-page ${
                      onSavedArticlesPage ? "nav__link-active-page_saved" : ""
                    }`}
                  ></div>
                </Link>
              </li>
            )}
          </ul>

          {isLoggedIn && (
            <button
              onClick={handleSignOut}
              className={`nav__log-out-btn ${
                onSavedArticlesPage ? "nav__log-out-btn-saved-articles" : ""
              }`}
            >
              {currentUser.name}{" "}
              {onSavedArticlesPage && (
                <img
                  src={logout_dark}
                  alt="logout icon"
                  className="nav__log-out-btn-img"
                />
              )}
              {onSavedArticlesPage && (
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
        {!isOpen && (
          <div
            onClick={handleOpen}
            className={`header__mobile-menu-btn ${
              onSavedArticlesPage
                ? "header__mobile-menu-btn-saved-articles"
                : ""
            } `}
          ></div>
        )}
        {isOpen && (
          <div
            onClick={handleExit}
            className={`header__mobile-menu-exit ${
              onSavedArticlesPage
                ? "header__mobile-menu-exit-saved-articles"
                : ""
            } `}
          ></div>
        )}
        {isOpen && (
          <div
            onClick={(e) => {
              handleOverlay("");
            }}
            className="header__mobile-modal"
          >
            {" "}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="header__mobile-menu"
            >
              <Link
                className={`nav__link ${
                  onSavedArticlesPage ? "nav__link-saved-articles" : ""
                } `}
                to="/"
              >
                Home
              </Link>{" "}
              {isLoggedIn && (
                <Link
                  className={`nav__link ${
                    onSavedArticlesPage ? "nav__link-saved-articles" : ""
                  } `}
                  to="/saved-articles"
                >
                  Saved Articles
                </Link>
              )}
              {!isLoggedIn && (
                <button
                  onClick={() => {
                    handleOverlay("login");
                  }}
                  className="nav__sign-in-menu-btn"
                >
                  Sign In
                </button>
              )}
              {isLoggedIn && (
                <button
                  onClick={handleSignOut}
                  className={`nav__log-out-menu-btn`}
                >
                  {currentUser.name}
                  {
                    <img
                      src={logout_white}
                      alt="logout icon"
                      className="nav__log-out-menu-btn-img"
                    />
                  }
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
