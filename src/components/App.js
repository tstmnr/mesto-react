import React from 'react';
import '../App.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name='edit'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
          children={<>
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
        </>} />
        <PopupWithForm
          name='add'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText='Создать'
          children={<>
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
        </>} />
        <PopupWithForm
          name='update'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
          children={<>
            <input className="form__input"
              id="avatar"
              type="url"
              value=""
              name="avatar-link"
              placeholder="Ссылка на картинку"
              required/>
            <span id="avatar-error" className="form__error"></span>
          </>}
        />

        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          isOpen={false}
          buttonText='Да'
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
