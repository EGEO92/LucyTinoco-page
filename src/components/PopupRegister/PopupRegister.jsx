import React, { useState, createRef } from "react";
import PopupWithform from "../PopupWithForm/PopupWithform";
import "./popup-register.css";

export default function PopupRegister(props) {
  const inputRef = createRef();
  const [isSuccesRegister, setIsSuccesRegister] = useState(false);
  //const [userName, setUserName] = useState("");

  //   function handleChange(e) {
  //     const key = e.target.name;
  //     const value = e.target.value;
  //     setUserName((state) => ({
  //       ...state,
  //       [key]: value,
  //     }));
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleName(inputRef.current.value);
    setIsSuccesRegister(true);
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
      tittle="Inscribirse"
      option="Iniciar sesión"
      closePopup={closePopup}
      handleSubmit={handleSubmit}
      isLoginPop={props.isLoginPop}
      handlePopup={handlePopup}
      isSuccesRegister={isSuccesRegister}
    >
      {isSuccesRegister ? (
        <div>
          <h2 className="popup__tittle popup__succes">
            ¡El registro se ha completado con éxito!
          </h2>
        </div>
      ) : (
        <div className="popup__register popup-div">
          <label for="user-name" className="popup__label">
            Nombre de usuario
          </label>
          <input
            className="popup__input"
            type="text"
            name="user-name"
            id="user-name"
            required
            placeholder="Introduce tu nombre de usuario"
            //   onChange={handleChange}
            ref={inputRef}
          />
          <span></span>
        </div>
      )}
    </PopupWithform>
  );
}
