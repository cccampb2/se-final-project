import "./ModalWithForm.css";

function ModalWithForm({
  children,
  name,
  isOpen,
  handleOverlay,
  onFormSubmit,
  ...props
}) {
  return (
    <div
      onClick={() => {
        handleOverlay("");
      }}
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
    >
      {/* the container for the contents */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`modal__content modal__content_type_${name} ${
          name === "login" ? "modal_type_login" : ""
        } ${name === "signUp" ? "modal_type_signUp" : ""} ${
          name === "success" ? "modal_type_success" : ""
        } `}
      >
        <form className="modal__form" noValidate onSubmit={onFormSubmit}>
          {children}
        </form>

        <button
          onClick={() => {
            handleOverlay("");
          }}
          className={`modal__close-btn modal__close-btn_type_${name}`}
          type="button"
        />
      </div>
    </div>
  );
}

export default ModalWithForm;
