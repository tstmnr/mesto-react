function PopupWithForm(props) {
  return (
    <section className={`popup ${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className="form popup__form" name="user-info">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">{props.title}</h2>
          <div className="form__container">
            {props.children}
          </div>
          <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
