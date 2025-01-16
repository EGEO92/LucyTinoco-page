import React from "react";
import "./PopupLogin.css";
import PopupWithform from "../PopupWithForm/PopupWithform.jsx";

function PopupLogin(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.signIn();
    closePopup();
  }

  function closePopup() {
    props.closePopup();
  }

  function handlePopup() {
    props.handlePopup();
  }

  return (
    <PopupWithform
      isOpen={props.isOpen}
      tittle="Iniciar sesión"
      option="Inscribirse"
      closePopup={closePopup}
      handleSubmit={handleSubmit}
      isLoginPop={props.isLoginPop}
      handlePopup={handlePopup}
    ></PopupWithform>
  );
}

export default PopupLogin;
