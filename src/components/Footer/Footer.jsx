import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <nav className="footer__navbar">
        <ul className="nav__links-footer">
          <li>
            <a className="nav__link-footer" href="">
              Home
            </a>
          </li>
          <li>
            <a
              className="nav__link-footer"
              target="_blank"
              href="https://tripleten.com/"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="nav__socials-footer">
          <li>
            <a
              className="nav__social-footer nav__link-github"
              href="https://github.com/"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              className="nav__social-footer nav__link-facebook"
              target="_blank"
              href="https://facebook.com/"
            ></a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
