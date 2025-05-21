import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [searched, setSearched] = useState(false);
  const [openedModal, setOpenedModal] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const handleOverlay = (overlayToHandle) => {
    setOpenedModal(overlayToHandle);
  };

  function searchFormSubmit(e) {
    e.preventDefault();
    setSearchResults([]);
    setIsSearching(true);
    setSearched(false);
    setTimeout(() => {
      setIsSearching(false);
      setSearched(true);

      setSearchResults((prevResults) => [
        ...prevResults,
        {
          source: "BBC News",
          title: "New Tech Advances in AI",
          date: "May 1, 2025",
          description:
            "Researchers unveil breakthrough AI model surpassing previous benchmarks.",
          imageUrl: "https://example.com/images/ai-news.jpg",
        },
        {
          source: "CNN",
          title: "Global Markets Rally",
          date: "May 2, 2025",
          description:
            "Stocks surge worldwide following positive economic forecasts.",
          imageUrl: "https://example.com/images/markets.jpg",
        },
        {
          source: "The Verge",
          title: "iPhone 17 Leaked",
          date: "May 3, 2025",
          description:
            "Leaked images of the iPhone 17 suggest a major redesign.",
          imageUrl: "https://example.com/images/iphone-leak.jpg",
        },
        {
          source: "National Geographic",
          title: "New Species Discovered",
          date: "May 4, 2025",
          description:
            "Scientists discover a new species of deep-sea jellyfish in the Pacific.",
          imageUrl: "https://example.com/images/jellyfish.jpg",
        },
        {
          source: "Reuters",
          title: "Election Results Announced",
          date: "May 5, 2025",
          description:
            "The latest national election results are in, with surprising outcomes.",
          imageUrl: "https://example.com/images/election.jpg",
        },
        {
          source: "TechCrunch",
          title: "Startup Raises $100M",
          date: "May 6, 2025",
          description:
            "A green energy startup secures $100M in Series C funding.",
          imageUrl: "https://example.com/images/startup.jpg",
        },
        {
          source: "ESPN",
          title: "Championship Recap",
          date: "May 7, 2025",
          description:
            "A thrilling finish as the Lakers clinch the title in Game 7.",
          imageUrl: "https://example.com/images/championship.jpg",
        },
        {
          source: "Bloomberg",
          title: "Interest Rates Hold Steady",
          date: "May 8, 2025",
          description:
            "The Fed announces no change to interest rates amid inflation concerns.",
          imageUrl: "https://example.com/images/interest-rates.jpg",
        },
        {
          source: "WIRED",
          title: "Quantum Computing Milestone",
          date: "May 9, 2025",
          description:
            "New quantum processor achieves stable 256-qubit performance.",
          imageUrl: "https://example.com/images/quantum.jpg",
        },
        {
          source: "IGN",
          title: "Top Game of the Year Announced",
          date: "May 10, 2025",
          description:
            "‘Chrono Rebirth’ takes the crown as Game of the Year at the GGA.",
          imageUrl: "https://example.com/images/game-of-year.jpg",
        },
      ]);
    }, 3000);
  }
  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} handleOverlay={handleOverlay} />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                searchResults={searchResults}
                searched={searched}
                isSearching={isSearching}
                setIsSearching={setIsSearching}
                searchFormSubmit={searchFormSubmit}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
      <LoginModal
        handleOverlay={handleOverlay}
        isOpen={openedModal === "login"}
        name={"login"}
      />
      <RegisterModal
        handleOverlay={handleOverlay}
        isOpen={openedModal === "signUp"}
        name={"signUp"}
      />
      <SuccessfulModal
        handleOverlay={handleOverlay}
        isOpen={openedModal === "success"}
        name={"success"}
      />
    </div>
  );
}

export default App;
