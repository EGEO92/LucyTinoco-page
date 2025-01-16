import "./PopupWithform.css";

function PopupWithform(props) {
  function closePopup() {
    props.closePopup();
  }
  function changePopup() {
    props.handlePopup();
  }
  return (
    <section>
      <div className={`popup__filter ${props.isOpen ? "" : "hidden"}`}></div>
      <div className={`popup ${props.isOpen ? "" : "hidden"}`}>
        {props.isSuccesRegister ? (
          props.children
        ) : (
          <div>
            <h2 className="popup__tittle">{props.tittle}</h2>
            <form className="popup__form form" onSubmit={props.handleSubmit}>
              <div className="popup__email popup-div">
                <label for="email" className="popup__label">
                  Correo electrónico
                </label>
                <input
                  className="popup__input"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Introduce tu correo electrónico"
                />
                <span></span>
              </div>
              <div className="popup__password popup-div">
                <label for="password" className="popup__label">
                  Contraseña
                </label>
                <input
                  className="popup__input"
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Introduce tu contraseña"
                  minLength={8}
                />
                <span></span>
              </div>
              {props.children}
              <button className="popup__btn" type="submit">
                {props.tittle}
              </button>
            </form>
          </div>
        )}
        <button className="popup__close" onClick={closePopup}></button>
        <p>
          o <a onClick={changePopup}>{props.option}</a>
        </p>
      </div>
    </section>
  );
}

export default PopupWithform;
