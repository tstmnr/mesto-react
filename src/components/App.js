import React from 'react';
import '../App.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState('');
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        api.getInitialCards()
          .then(cardsData => {
            setCards(
              cardsData.map((item) => ({
                id: item._id,
                src: item.link,
                name: item.name,
                likes: item.likes
              }))
            );
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen('popup_opened');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen('popup_opened');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen('popup_opened');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen('');
    setIsEditProfilePopupOpen('');
    setIsAddPlacePopupOpen('');
    setSelectedCard('');
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          name={userName}
          about={userDescription}
          avatar={userAvatar}
          cards={cards}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name='edit'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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

        <PopupWithForm name='delete' title='Вы уверены?' isOpen='false' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
