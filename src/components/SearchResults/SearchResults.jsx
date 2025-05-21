import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import testPhoto from "../../assets/test-photo.jpg";
import { useState } from "react";

function SearchResults({ results }) {
  const [initialResults, setinitialResults] = useState(3);

  const visibleResults = results.slice(0, initialResults);

  const showMore = () => {
    setinitialResults((prevCount) => prevCount + 3); // load 3 more cards
  };

  return (
    <div className="searchResults">
      <div className="searchResults__title">Search Results</div>
      <div className="searchResults__card-container">
        {visibleResults.map((result, index) => {
          return (
            <NewsCard
              key={index}
              imageUrl={testPhoto}
              publishedDate={result.date}
              title={result.title}
              source={result.source}
              description={result.description}
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
