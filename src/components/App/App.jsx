import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router";
import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import PopupLogin from "../PopupLogin/PopupLogin.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import PopupRegister from "../PopupRegister/PopupRegister.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("EGEO92");
  const [isLoginPop, setIsLoginPop] = useState(true);

  function signIn() {
    setLoggedIn(true);
  }

  function signOut() {
    setLoggedIn(false);
    setIsLoginPop(true);
  }

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  function handleName(string) {
    setName(string);
  }

  function handlePopup() {
    if (isLoginPop) {
      setIsLoginPop(false);
    }
    if (!isLoginPop) {
      setIsLoginPop(true);
    }
  }

  return (
    <div className="app__wraper">
      <Routes>
        <Route
          path="/saved-news"
          element={
            loggedIn ? (
              <SavedNews loggedIn={loggedIn} signOut={signOut} name={name} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            <Main
              loggedIn={loggedIn}
              signOut={signOut}
              signIn={openPopup}
              name={name}
            />
          }
        ></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      {isLoginPop ? (
        <PopupLogin
          isOpen={isOpen}
          signIn={signIn}
          closePopup={closePopup}
          isLoginPop={isLoginPop}
          handlePopup={handlePopup}
        />
      ) : (
        <PopupRegister
          isOpen={isOpen}
          signIn={signIn}
          closePopup={closePopup}
          handleName={handleName}
          isLoginPop={isLoginPop}
          handlePopup={handlePopup}
        />
      )}
    </div>
  );
}

export default App;
