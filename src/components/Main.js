import Card from './Card';

function Main( {onEditProfile, onAddPlace, onEditAvatar, name, about, avatar, cards, onCardClick} ) {
  return (
    <main className="content container__content">
      <section className="profile">
        <div className="profile__wrapper">
        <div className="profile__avatar-container">
            <div className="profile__avatar" style={{ backgroundImage: `url(${avatar})` }} >
            </div>
            <button className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__about">{about}</p>
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
