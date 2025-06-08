import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Navigation.css";

function Navigation({
  isOpen,
  handleSignOut,
  currentUser,
  isLoggedIn,
  handleOverlay,
  searchFormSubmit,
}) {
  const location = useLocation();

  return (
    <div className="navigation">
      <Header
        isOpen={isOpen}
        handleSignOut={handleSignOut}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        handleOverlay={handleOverlay}
      />
      {location.pathname === "/" && (
        <SearchForm searchFormSubmit={searchFormSubmit} />
      )}
    </div>
  );
}

export default Navigation;
