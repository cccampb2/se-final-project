import { useState, useEffect } from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({
  imageUrl,
  publishedDate,
  title,
  source,
  description,
  isLoggedIn,
  handleArticleSave,
  savedNews,
  handleArticleDelete,
  id,
  currentUser,
  ...props
}) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const alreadySaved = savedNews?.some((item) => item.title === title);

    setIsSaved(alreadySaved);
  }, [savedNews, title]);

  return (
    <article className="newsCard">
      {props.keyword && location.pathname === `/saved-articles` && (
        <div className="newsCard__keyword">
          {props.keyword.charAt(0).toUpperCase() + props.keyword.slice(1)}
        </div>
      )}
      {!props.onSavedPage && (
        <div
          onClick={() => {
            if (isLoggedIn) {
              setIsSaved(true);
              handleArticleSave({
                imageUrl,
                publishedDate,
                title,
                source,
                description,
                keyword: props.keyword,
              });
            }
          }}
          className={`${isSaved ? "newsCard__saved" : "newsCard__bookmark"}`}
        >
          {!isLoggedIn && (
            <p className="newsCard__sign-in-to-save">
              Sign in to save articles
            </p>
          )}
        </div>
      )}
      {props.onSavedPage && (
        <div
          onClick={() => {
            console.log(id);
            handleArticleDelete(id, currentUser._id);
          }}
          className="newsCard__trash"
        >
          <p className="newsCard__trash-popup">Remove from saved</p>
        </div>
      )}
      <img src={imageUrl} alt={title} className="newsCard__image" />
      <div className="newsCard__info-container">
        <p className="newsCard__date">{publishedDate}</p>
        <p className="newsCard__title">{title}</p>
        <p className="newsCard__desc">{description}</p>
        <p className="newsCard__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
