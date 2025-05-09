import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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
    </div>
  );
}

export default App;
