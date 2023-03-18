import PopupWithForm from "./PopupWithForm";

function DeletePopup({ card, isOpen, onClose, onSubmit }) {

const handleSubmit = (e) => {
  onSubmit(e, card);
}

  return (
    <PopupWithForm
    name='delete'
    title='Вы уверены?'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    buttonText='Да'
    children={<></>}
  />
  );
}

export default DeletePopup;
