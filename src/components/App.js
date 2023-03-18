import React from 'react';
import '../App.css';
import api from '../utils/Api';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser({
          name: userData.name,
          about: userData.about,
          avatar: userData.avatar,
          _id: userData._id,
        });

        setCards(
          cardsData.map((item) => ({
            _id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes,
            owner: item.owner._id,
          }))
        );
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function handleUpdateUserData(e, userData) {
    e.preventDefault();
    console.log(userData);
    api.patchUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        closeAllPopups();
      });
    }

  function handleUpdateAvatar(e, userData) {
    e.preventDefault();
    api.patchAvatar(userData)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleAddPlaceSubmit(e, card) {
    e.preventDefault();
    api.postCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCards) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCards : c));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(setCards(cards.filter(item => {
          return item._id !== card._id
        })))
      .catch((err) => console.log(err));;
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

        <CurrentUserContext.Provider value={currentUser} >
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        </CurrentUserContext.Provider>

        <Footer />

        <CurrentUserContext.Provider value={currentUser} >
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateUserData} />
        </CurrentUserContext.Provider>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit} />


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
