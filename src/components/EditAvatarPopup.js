import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup( {isOpen, onClose, onSubmit } ) {

  const [changeAvatar, setChangeAvatar] = React.useState('');

  React.useEffect(() => {
    setChangeAvatar('');
  }, [isOpen]);

  const handleChangeAvatar = (e) => {
    setChangeAvatar(e.target.value);
  }

  const handleSubmit = (e) => {
    onSubmit(e, {
      avatar: changeAvatar,
    });
  }

  return (
    <PopupWithForm
          name='update'
          title='Обновить аватар'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          buttonText='Сохранить'
          children={<>
            <input className="form__input"
              id="avatar"
              type="url"
              value={changeAvatar || ''}
              name="avatar-link"
              placeholder="Ссылка на картинку"
              onChange={handleChangeAvatar}
              required/>
            <span id="avatar-error" className="form__error"></span>
        </>} />
  );
}

export default EditAvatarPopup;
