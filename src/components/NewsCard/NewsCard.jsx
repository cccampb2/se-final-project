import "./NewsCard.css";

function NewsCard({ imageUrl, publishedDate, title, source, description }) {
  return (
    <div className="newsCard">
      <div className="newsCard__bookmark"></div>
      <img src={imageUrl} alt={title} className="newsCard__image" />
      <div className="newsCard__info-container">
        <div className="newsCard__date">{publishedDate}</div>
        <div className="newsCard__title">{title}</div>
        <p className="newsCard__desc">{description}</p>
        <div className="newsCard__source">{source}</div>
      </div>
    </div>
  );
}

export default NewsCard;
