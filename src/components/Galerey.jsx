import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Galerey({ data: { results } }) {
  const { addNewImage } = useContext(GlobalContext);
  // console.log(results);
  return (
    <ul className="galerey-ul">
      {results.map((image) => {
        return (
          <li key={image.id}>
            <Link to={`singlepage/${image.id}`}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                width={300}
                height={300}
              />
            </Link>
            <button
              className="button"
              onClick={() => {
                addNewImage(image);
              }}
            >
              Like❤️
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Galerey;
