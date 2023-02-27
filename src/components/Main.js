function Main(props) {
  return (
    <main className="content container__content">
      <section className="profile">
        <div className="profile__wrapper">
        <div className="profile__avatar-container">
            <div className="profile__avatar">
            </div>
            <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__about"></p>
        </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="places content__places">
        <ul className="places__items">
        </ul>
      </section>
    </main>
  );
}

export default Main;
