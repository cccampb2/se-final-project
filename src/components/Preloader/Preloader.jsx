import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__searching"></div>
      <p className="preloader__caption">Searching for news...</p>
    </div>
  );
}

export default Preloader;
