import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import SearchResults from "../SearchResults/SearchResults";
import NotFound from "../NotFound/NotFound";
function Main({
  isSearching,

  searched,
  searchResults,
  isLoggedIn,
  currentKeyword,
  handleArticleSave,
  savedNews,
}) {
  return (
    <main className="main">
      {searched && searchResults.length > 0 && (
        <SearchResults
          savedNews={savedNews}
          handleArticleSave={handleArticleSave}
          currentKeyword={currentKeyword}
          isLoggedIn={isLoggedIn}
          results={searchResults}
        />
      )}
      {isSearching && (
        <div className="main__search-results">
          <Preloader />
        </div>
      )}
      {searched && searchResults.length === 0 && <NotFound />}
      <About />
    </main>
  );
}

export default Main;
