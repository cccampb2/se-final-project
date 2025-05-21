import "./NotFound.css";
import notFoundImg from "../../assets/not-found.svg";

function NotFound() {
  return (
    <div className="notFound">
      <img src={notFoundImg} alt="Not found image" className="notFound_img" />
      <p className="notFound__title">Nothing Found</p>
      <p className="notFound__description">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
