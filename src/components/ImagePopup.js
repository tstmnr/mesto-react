function ImagePopup() {
  return (
    <section className="popup popup-image">
      <div className="popup__container">
        <figure className="popup-image__figure">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <img className="popup-image__photo" alt=""/>
          <figcaption className="popup-image__figcaption"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
