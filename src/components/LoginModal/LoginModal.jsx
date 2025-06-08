import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function LoginModal({ isOpen, name, handleOverlay, handleSignIn }) {
  const form = useForm({ mode: "onTouched" });
  const { resetField, register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  useEffect(() => {
    if (isOpen) {
      resetField("email_login");
      resetField("password_login");
    }
  }, [isOpen]);

  const handleFormSubmit = (data) => {
    //sign in on backend
    handleSignIn(data);
    //close modal
    handleOverlay("");
  };

  return (
    <>
      <ModalWithForm
        onFormSubmit={handleSubmit(handleFormSubmit)}
        handleOverlay={handleOverlay}
        isOpen={isOpen}
        name={name}
      >
        <h2 className="modal__title">Sign In</h2>
        <label htmlFor="email_login" className="modal__label">
          Email
          <input
            {...register("email_login", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            id="email_login"
            className="modal__input"
            type="email"
            placeholder="Enter email"
          />
          <span className="modal__error">{errors.email_login?.message}</span>
        </label>
        <label htmlFor="password_login" className="modal__label">
          Password
          <input
            {...register("password_login", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            id="password_login"
            className="modal__input"
            type="password"
            placeholder="Enter password"
          />
          <span className="modal__error">{errors.password_login?.message}</span>
        </label>
        <button disabled={!isValid} type="submit" className="modal__btn-main">
          Sign In
        </button>
        <div className="modal__btn-secondary-container">
          or{" "}
          <button
            onClick={() => {
              handleOverlay("signUp");
            }}
            type="button"
            className="modal__btn-secondary"
          >
            Sign Up
          </button>
        </div>
      </ModalWithForm>
    </>
  );
}

export default LoginModal;
