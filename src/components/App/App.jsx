import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

export default App;
