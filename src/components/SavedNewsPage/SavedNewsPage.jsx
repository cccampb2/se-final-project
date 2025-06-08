import "./SavedNewsPage.css";
import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";

function SavedNewsPage({
  currentUser,
  savedNews,
  isLoggedIn,
  handleArticleDelete,
}) {
  const location = useLocation();
  const uniqueKeywords = [...new Set(savedNews.map((item) => item.keyword))];

  const firstTwo = uniqueKeywords.slice(0, 2);

  const remainingCount = uniqueKeywords.length - firstTwo.length;

  let displayString = firstTwo.join(", ");
  if (remainingCount > 0) {
    displayString += `, and ${remainingCount} other${
      remainingCount > 1 ? "s" : ""
    }`;
  }

  console.log(savedNews);

  return (
    <section className="savedNews">
      <div className="savedNews__header">
        <h1 className="savedNews__title">Saved articles</h1>
        <p className="savedNews__info">{`${currentUser.name}, you have ${savedNews.length} saved articles`}</p>
        <p className="savedNews__keyword">
          By keywords:{" "}
          <span className="savedNews__keywords">{displayString}</span>
        </p>
      </div>
      {savedNews.length !== 0 && (
        <div className="savedNews__content">
          {" "}
          {savedNews.map((result, index) => {
            return (
              <NewsCard
                currentUser={currentUser}
                id={result._id}
                handleArticleDelete={handleArticleDelete}
                onSavedPage={location.pathname === `/saved-articles`}
                isLoggedIn={isLoggedIn}
                key={index}
                imageUrl={result.imageUrl}
                publishedDate={result.publishedDate}
                title={result.title}
                source={result.source}
                description={result.description}
                keyword={result.keyword}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default SavedNewsPage;
