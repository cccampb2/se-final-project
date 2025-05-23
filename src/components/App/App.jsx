import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal.jsx";
import getNews from "../../utils/newsapi.js";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { saveArticle } from "../../utils/api.js";
import { authorize, checkToken } from "../../utils/auth.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [openedModal, setOpenedModal] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "Caleb",
    _id: "65f7368dfb74bd6a92114c85",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [savedNews, setSavedNews] = useState([]);

  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  }

  function handleSignIn(data) {
    authorize(data.email_login, data.password_login)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return checkToken(res.token);
      })
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.error("Login failed: ", err.message);
      });
  }

  const handleOverlay = (overlayToHandle) => {
    setOpenedModal(overlayToHandle);
  };

  const handleArticleSave = (data) => {
    setSavedNews([...savedNews, data]);
  };

  function populateSearchResults(articles) {
    const filteredArticles = articles.map((article) => {
      return {
        imageUrl: article.urlToImage,
        publishedDate: article.publishedAt.split("T")[0],
        title: article.title,
        source: article.source.name,
        description: article.description,
      };
    });

    setSearchResults(filteredArticles);
  }

  function searchFormSubmit(data) {
    setSearchResults([]);
    setIsSearching(true);
    setSearched(false);
    setCurrentKeyword(data.main_search);
    getNews({ beingSearched: data.main_search })
      .then((data) => {
        populateSearchResults(data.articles);
      })
      .then(() => {
        setIsSearching(false);
        setSearched(true);
      });
  }
  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleSignOut={handleSignOut}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          handleOverlay={handleOverlay}
        />

        <Routes>
          <Route
            path="/saved-articles"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNewsPage
                  isLoggedIn={isLoggedIn}
                  savedNews={savedNews}
                  currentUser={currentUser}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <Main
                savedNews={savedNews}
                handleArticleSave={handleArticleSave}
                currentKeyword={currentKeyword}
                isLoggedIn={isLoggedIn}
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
        handleSignIn={handleSignIn}
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
