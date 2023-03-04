import React from "react";

function PopupWithForm( {name, title, isOpen, onClose, children } ) {
  return (
    <section className={`popup popup-${name}} ${isOpen}`}>
      <div className="popup__container">
        <form className="form popup__form" name="user-info">
          <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          <div className="form__container">
            {children}
          </div>
          <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
