import '../App.css';
import logo from '../images/logo.svg';

function App() {
  return (
    <div className="page">
      <div className="container">
   
    <header className="header container__header">
      <img className="logo header__logo" src={logo} alt="Логотип страницы сайта Место"/>
    </header>

    <main className="content container__content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-container">
            <div className="profile__avatar">
            </div>
            <button className="profile__avatar-edit-button"></button>
          </div>
          <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
              <p className="profile__about"></p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить"></button>
      </section>

      <section className="places content__places">
        <ul className="places__items">

        </ul>
      </section>
    </main>

    <footer className="footer container__footer">
      <h3 className="footer__copyright">© 2020 Mesto Russia</h3>
    </footer>

    <section className="popup popup-edit">
      <div className="popup__container">
        <form className="form popup__form" name="user-info">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <div className="form__container">
            <input className="form__input"
              id="name"
              type="text"
              minLength="2"
              maxLength="40"
              value=""
              name="name"
              placeholder="Имя"
              required/>
            <span id="name-error" className="form__error"></span>
            <input className="form__input"
              id="about"
              type="text"
              minLength="2"
              maxLength="200"
              value=""
              name="about"
              placeholder="Коротко о себе"
              required/>
            <span id="about-error" className="form__error"></span>
          </div>
          <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>

    <section className="popup popup-add">
      <div className="popup__container">
        <form className="form popup__form" name="new-card">
          <button className="popup__close popup__close_type_card" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Новое место</h2>
          <div className="form__container">
            <input className="form__input"
              id="place-name"
              type="text"
              minLength="2"
              maxLength="30"
              value=""
              name="place-name"
              placeholder="Название"
              required/>
            <span id="place-name-error" className="form__error"></span>
            <input className="form__input"
              id="link"
              type="url"
              value=""
              name="place-link"
              placeholder="Ссылка на картинку"
              required/>
            <span id="link-error" className="form__error"></span>
          </div>
          <button className="form__button" type="submit" aria-label="Создать">Создать</button>
        </form>
      </div>
    </section>

    <section className="popup popup-image">
      <div className="popup__container">
        <figure className="popup-image__figure">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <img className="popup-image__photo" alt=""/>
          <figcaption className="popup-image__figcaption"></figcaption>
        </figure>
      </div>
    </section>

    <section className="popup popup-delete">
      <div className="popup__container">
        <form className="form popup__form" name="delete-card">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title popup__title_margin_bottom">Вы уверены?</h2>
          <button className="form__button" type="submit" aria-label="Сохранить">Да</button>
        </form>
      </div>
    </section>

    <section className="popup popup-update">
      <div className="popup__container">
        <form className="form popup__form" name="avatar">
          <button className="popup__close popup__close_type_card" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <div className="form__container">
            <input className="form__input"
              id="avatar"
              type="url"
              value=""
              name="avatar-link"
              placeholder="Ссылка на картинку"
              required/>
            <span id="avatar-error" className="form__error"></span>
          </div>
          <button className="form__button" type="submit" aria-label="Создать">Сохранить</button>
        </form>
      </div>
    </section>
  </div>

  <template id="template-card">
    <li className="card">
      <img className="card__image" alt=""/>
      <div className="card__info">
        <h2 className="card__title"></h2>
        <div className="card__favourites-wrapper">
          <button className="card__favourites" type="button" aria-label="Добавить в избранное"></button>
          <span className="card__counter"></span>
        </div>
      </div>
      <button className="card__delete" type="button" aria-label="Удалить место"></button>
    </li>
  </template>
    </div>
  );
}

export default App;
