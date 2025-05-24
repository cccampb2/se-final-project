import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function RegisterModal({ isOpen, name, handleOverlay, handleSignUp }) {
  const form = useForm({ mode: "onTouched" });
  const { resetField, register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  useEffect(() => {
    if (isOpen) {
      resetField("email_signUp");
      resetField("password_signUp");
      resetField("username_signUp");
    }
  }, [isOpen]);

  const handleFormSubmit = (data) => {
    console.log(data);
    //sign up on backend
    handleSignUp(data);
  };
  return (
    <>
      <ModalWithForm
        onFormSubmit={handleSubmit(handleFormSubmit)}
        handleOverlay={handleOverlay}
        isOpen={isOpen}
        name={name}
      >
        <h2 className="modal__title">Sign Up</h2>
        <label htmlFor="email_signUp" className="modal__label">
          Email
          <input
            {...register("email_signUp", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            id="email_signUp"
            className="modal__input"
            type="email"
            placeholder="Enter email"
          />
          <span className="modal__error">{errors.email_signUp?.message}</span>
        </label>
        <label htmlFor="password_signUp" className="modal__label">
          Password
          <input
            {...register("password_signUp", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            id="password_signUp"
            className="modal__input"
            type="password"
            placeholder="Enter password"
          />
          <span className="modal__error">
            {errors.password_signUp?.message}
          </span>
        </label>
        <label htmlFor="username_signUp" className="modal__label">
          Username
          <input
            {...register("username_signUp", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            id="username_signUp"
            className="modal__input"
            type="Enter your username"
            placeholder="Enter username"
          />
          <span className="modal__error">
            {errors.username_signUp?.message}
          </span>
        </label>
        <button type="submit" disabled={!isValid} className="modal__btn-main">
          Sign Up
        </button>
        <div className="modal__btn-secondary-container">
          or{" "}
          <button
            onClick={() => {
              handleOverlay("login");
            }}
            type="button"
            className="modal__btn-secondary"
          >
            Sign In
          </button>
        </div>
      </ModalWithForm>
    </>
  );
}

export default RegisterModal;
