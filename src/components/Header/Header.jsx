import "./Header.css";

function Header({ isLoggedIn, handleOverlay }) {
  return (
    <header className="header">
      <div className="header__items">
        <div className="header__title">NewsExplorer</div>
        <nav className="header__navbar">
          <ul className="nav__items">
            <li className="nav__item">
              <a className="nav__link" href="#home">
                Home
              </a>
            </li>
            {isLoggedIn && (
              <li className="nav__item">
                <a className="nav__link" href="#saved">
                  Saved Articles
                </a>
              </li>
            )}
          </ul>
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
