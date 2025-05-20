import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState({});
  const [openedModal, setOpenedModal] = useState("");

  function searchFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
        <Main
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          searchFormSubmit={searchFormSubmit}
        />
        <Footer />
      </div>
      <LoginModal isOpen={openedModal === "login"} name={"login"} />
      <RegisterModal isOpen={openedModal === "signUp"} name={"signUp"} />
      <SuccessfulModal isOpen={openedModal === "success"} name={"success"} />
    </div>
  );
}

export default App;
