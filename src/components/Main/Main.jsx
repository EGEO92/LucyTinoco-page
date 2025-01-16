import React, { useState } from "react";
import "./main.css";
import Header from "../Header/Header.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import About from "../About/About.jsx";

function Main(props) {
  const [isSearch, letIsSearch] = useState(false);

  function signIn() {
    props.signIn();
  }

  function signOut() {
    props.signOut();
  }

  function handleSearchWindow() {
    if (isSearch === false) {
      return <About />;
    }
    if (isSearch === true) {
      return (
        <>
          <SearchResults loggedIn={props.loggedIn} />
          <About />
        </>
      );
    }
  }

  function handleSearchButton(e) {
    e.preventDefault();
    letIsSearch(true);
  }

  return (
    <>
      <main className="main" id="main">
        <Header
          loggedIn={props.loggedIn}
          signIn={signIn}
          signOut={signOut}
          name={props.name}
        />
        <div className="main__wraper">
          <h2 className="main__tittle">¿En qué podemos ayudarte?</h2>
          <p className="main__text">
            Encuentra los servicios que necesites, no dudes en contactarnos.
          </p>
          <div>
            <h3>Seguros</h3>
            <p>
              Seguros de vida , ahorro , ppr (plan privado del retiro) , carros
              , casa habitación, negocio, viajero
            </p>
          </div>
          <div>
            <h3>Pensiones</h3>
            <p>
              IMSS,correcciones, estrategias para mejorar pensión, asesoría y
              estudios , gestoría , modalidad 40 etc...{" "}
            </p>
          </div>
          <div>
            <h3>Infonavit</h3>
            <p>
              Información, precalificación, asesoría, estrategias para mejorar
              el credito, recuperación de cuenta en efectivo.....
            </p>
          </div>
        </div>
      </main>
      {handleSearchWindow()}
      {/* <SearchResults />
      <About /> */}
    </>
  );
}

export default Main;
