import React, { useEffect, useState } from "react";
import "./cards.css";
import { useLocation } from "react-router";
import bookmark from "../../images/bookmark.png";
import trash from "../../images/trash.png";

function Card(props) {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  function handleSaveNews() {
    if (!props.loggedIn) {
      setIsClicked(true);
    }
    // funcion en api para guardar la noticia...
  }

  function handleLocation() {
    if (location.pathname === "/") {
      return (
        <img
          className="card__btn-img"
          src={bookmark}
          alt=""
          onClick={handleSaveNews}
        />
      );
    }
    if (location.pathname === "/saved-news") {
      return <img className="card__btn-img" src={trash} alt="" />;
    }
  }

  return (
    <div className="card">
      {props.loggedIn ? (
        ""
      ) : (
        <div
          className={`card__unlog ${
            props.loggedIn ? "hidden" : isClicked ? "" : "hidden"
          }`}
        >
          Inicia sesión para guardar artículos
        </div>
      )}
      <button className="card__btn">{handleLocation()}</button>
      <img className="card__img" src={props.pic} alt="" />
      <div className="card__wraper">
        <p className="card__date">{props.date}</p>
        <h2 className="card__tittle">{props.tittle}</h2>
        <p className="card_description">{props.description}</p>
        <p className="card__source">{props.source}</p>
      </div>
    </div>
  );
}

export default Card;
