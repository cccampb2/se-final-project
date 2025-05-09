import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main({ isSearching, setIsSearching, searchFormSubmit }) {
  return (
    <main className="main">
      <SearchForm
        setIsSearching={setIsSearching}
        searchFormSubmit={searchFormSubmit}
      />
      {isSearching && (
        <div className="main__search-results">
          <Preloader />
        </div>
      )}
      <About />
    </main>
  );
}

export default Main;
