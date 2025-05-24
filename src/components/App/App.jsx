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
import { saveArticle, getItems, deleteArticle } from "../../utils/api.js";
import { authorize, checkToken, signUp } from "../../utils/auth.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [openedModal, setOpenedModal] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [savedNews, setSavedNews] = useState([]);

  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSearchResults([]);
    setSearched(false);
    navigate("/");
  }

  function handleSignUp(data) {
    signUp(data.email_signUp, data.username_signUp, data.password_signUp)
      .then((res) => {
        console.log(res);
        handleOverlay("success");
      })
      .catch(console.error);
  }

  function handleSignIn(data) {
    console.log("stuff: ", data);
    authorize(data.email_login, data.password_login)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return checkToken(res.token);
      })
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        getItems(res.data._id).then(setSavedNews);
      })
      .catch((err) => {
        console.error("Login failed: ", err.message);
      });
  }

  const handleOverlay = (overlayToHandle) => {
    setOpenedModal(overlayToHandle);
  };

  const handleArticleDelete = (articleId, userId) => {
    deleteArticle(articleId, userId).then(console.log).catch(console.error);
    const filterSavedNews = savedNews.filter(
      (article) => article._id !== articleId
    );
    setSavedNews(filterSavedNews);
  };

  const handleArticleSave = (data) => {
    saveArticle(data, currentUser._id)
      .then((savedArticle) => {
        setSavedNews([...savedNews, savedArticle]);
      })
      .catch(console.error);
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
                  handleArticleDelete={handleArticleDelete}
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
        handleSignUp={handleSignUp}
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
