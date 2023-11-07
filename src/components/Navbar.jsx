import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

function Navbar() {
  const { likedImages, changeMode, mode } = useGlobalContext();

  const changeGlobalMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    const modeIcon = mode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />;
    changeMode(newMode);
  };

  return (
    <div className="navbar container">
      <h3 className="logo">Unsplash</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/likedImages">
          Likes
          <span className="badge">{likedImages.length}</span>
        </Link>
        <Link to="/login">Log In</Link>
        <button className="button modeBtn" onClick={() => changeGlobalMode()}>
          {mode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
