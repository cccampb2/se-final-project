import "./SearchForm.css";

import { useForm } from "react-hook-form";

function SearchForm({ searchFormSubmit }) {
  const form = useForm({ mode: "onTouched" });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <div className="searchForm">
      <div className="searchForm__contents">
        <p className="searchForm__question">What's going on in the world?</p>
        <p className="searchForm__caption">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form
          onSubmit={handleSubmit(searchFormSubmit)}
          className="searchForm__search-bar"
        >
          <input
            {...register("main_search", {
              required: {
                value: true,
                message: "Please enter a keyword",
              },
            })}
            id="main_search"
            type="text"
            className="searchForm__input"
            placeholder="Enter Topic"
          />
          <span className="searchForm__error">
            {errors.main_search?.message}
          </span>
          <button className="searchForm__btn">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
