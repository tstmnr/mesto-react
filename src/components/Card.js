import React from 'react';

function Card({ name, src, likes, onCardClick }) {

  function handleClick() {
    const card = {
      name: name,
      src: src
    };
    onCardClick(card);
  }

  return (
    <li className="card">
      <img className="card__image" alt={`Картинка ${name}`} src={src} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__favourites-wrapper">
          <button className="card__favourites" type="button" aria-label="Добавить в избранное"></button>
          <span className="card__counter">{likes.length}</span>
        </div>
      </div>
      <button className="card__delete" type="button" aria-label="Удалить место"></button>
    </li>
  );
}

export default Card;

