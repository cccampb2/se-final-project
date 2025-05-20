import "./ModalWithForm.css";

function ModalWithForm({ children, name, isOpen, ...props }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      {/* the container for the contents */}
      <div
        className={`modal__content modal__content_type_${name} ${
          name === "login" ? "modal_type_login" : ""
        } ${name === "signUp" ? "modal_type_signUp" : ""} ${
          name === "success" ? "modal_type_success" : ""
        } `}
      >
        <form className="modal__form" noValidate>
          {children}
        </form>

        <button
          className={`modal__close-btn modal__close-btn_type_${name}`}
          type="button"
        />
      </div>
    </div>
  );
}

export default ModalWithForm;
