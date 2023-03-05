import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main( {onEditProfile, onAddPlace, onEditAvatar, onCardClick} ) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(
          cardsData.map((item) => ({
            id: item._id,
            src: item.link,
            name: item.name,
            likes: item.likes
          }))
        );
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content container__content">
      <section className="profile">
        <div className="profile__wrapper">
        <div className="profile__avatar-container">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
            </div>
            <button className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>

      <section className="places content__places">
        <ul className="places__items">
          {
          cards.map(({id, ...props}) => (
            <Card key={id} {...props} onCardClick={onCardClick} />
          ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
