import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function SearchResults({
  results,
  isLoggedIn,
  handleArticleSave,
  savedNews,
  ...props
}) {
  const [initialResults, setinitialResults] = useState(3);

  const visibleResults = results.slice(0, initialResults);

  const showMore = () => {
    setinitialResults((prevCount) => prevCount + 3);
  };

  const convertDate = (date) => {
    const dateStr = date;
    const dateObj = new Date(dateStr);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <div className="searchResults">
      <div className="searchResults__title">Search Results</div>
      <div className="searchResults__card-container">
        {visibleResults.map((result, index) => {
          return (
            <NewsCard
              results={results}
              savedNews={savedNews}
              handleArticleSave={handleArticleSave}
              isLoggedIn={isLoggedIn}
              key={index}
              imageUrl={result.imageUrl}
              publishedDate={convertDate(result.publishedDate)}
              title={result.title}
              source={result.source}
              description={result.description}
              keyword={props.currentKeyword}
            />
          );
        })}
      </div>
      {initialResults < results.length && (
        <button onClick={showMore} className="searchResults__show">
          Show More
        </button>
      )}{" "}
    </div>
  );
}

export default SearchResults;
