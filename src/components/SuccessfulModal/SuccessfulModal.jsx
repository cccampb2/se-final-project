import "./SuccessfulModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SuccessfulModal({ isOpen, name, handleOverlay }) {
  return (
    <>
      <ModalWithForm handleOverlay={handleOverlay} isOpen={isOpen} name={name}>
        <div className="modal__title modal__title-success">
          Registration successfully completed!
        </div>
        <button
          type="button"
          className="modal__btn-secondary modal__btn-secondary-success"
        >
          Sign In
        </button>
      </ModalWithForm>
    </>
  );
}

export default SuccessfulModal;
