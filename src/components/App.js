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

  const [changeName, setChangeName] = React.useState('');
  const [changeAbout, setChangeAbout] = React.useState('');
  const [changePlaceName, setChangePlaceName] = React.useState('');
  const [changePlaceLink, setChangePlaceLink] = React.useState('');
  const [changeAvatarLink, setChangeAvatarLink] = React.useState('');

  const handleChangeName = (e) => {
    setChangeName(e.target.value);
  }

  const handleChangeAbout = (e) => {
    setChangeAbout(e.target.value);
  }

  const handleChangePlaceName = (e) => {
    setChangePlaceName(e.target.value);
  }

  const handleChangePlaceLink = (e) => {
    setChangePlaceLink(e.target.value);
  }

  const handleChangeAvatarLink = (e) => {
    setChangeAvatarLink(e.target.value);
  }

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
              value={changeName}
              name="name"
              placeholder="Имя"
              onChange={handleChangeName}
              required/>
            <span id="name-error" className="form__error"></span>
            <input className="form__input"
              id="about"
              type="text"
              minLength="2"
              maxLength="200"
              value={changeAbout}
              name="about"
              placeholder="Коротко о себе"
              onChange={handleChangeAbout}
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
              value={changePlaceName}
              name="place-name"
              placeholder="Название"
              onChange={handleChangePlaceName}
              required/>
            <span id="place-name-error" className="form__error"></span>
            <input className="form__input"
              id="link"
              type="url"
              value={changePlaceLink}
              name="place-link"
              placeholder="Ссылка на картинку"
              onChange={handleChangePlaceLink}
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
              value={changeAvatarLink}
              name="avatar-link"
              placeholder="Ссылка на картинку"
              onChange={handleChangeAvatarLink}
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
