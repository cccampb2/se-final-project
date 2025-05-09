import "./SearchForm.css";

function SearchForm({ setIsSearching, searchFormSubmit }) {
  return (
    <div className="searchForm">
      <div className="searchForm__contents">
        <p className="searchForm__question">What's going on in the world?</p>
        <p className="searchForm__caption">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form onSubmit={searchFormSubmit} className="searchForm__search-bar">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Enter Topic"
          />
          <button
            onClick={() => {
              setIsSearching(true);
            }}
            className="search-bar__btn"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
