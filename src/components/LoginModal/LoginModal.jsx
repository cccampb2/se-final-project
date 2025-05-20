import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, name }) {
  return (
    <>
      <ModalWithForm isOpen={isOpen} name={name}>
        <h2 className="modal__title">Sign In</h2>
        <label className="modal__label">
          Email
          <input
            className="modal__input"
            type="text"
            placeholder="Enter email"
          />
        </label>
        <label className="modal__label">
          Password
          <input
            className="modal__input"
            type="password"
            placeholder="Enter password"
          />
        </label>
        <button type="button" className="modal__btn-main">
          Sign In
        </button>
        <div className="modal__btn-secondary-container">
          or{" "}
          <button type="button" className="modal__btn-secondary">
            Sign Up
          </button>
        </div>
      </ModalWithForm>
    </>
  );
}

export default LoginModal;
