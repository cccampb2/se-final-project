import { checkResponse } from "./api";

const API_KEY = "472ec572e3854d0faec8d436ed4dc574";
const newsApiBaseUrl = "https://nomoreparties.co/news/v2/everything";

function getNews({ beingSearched }) {
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const formattedCurrentDate = formatDate(currentDate);
  const formattedSevenDaysAgo = formatDate(sevenDaysAgo);

  // e.g., 2025-05-14

  return fetch(
    `${newsApiBaseUrl}?q=${beingSearched}&from=${formattedSevenDaysAgo}&to=${formattedCurrentDate}&pageSize=${20}&apiKey=${API_KEY}`
  ).then(checkResponse);
}

export default getNews;
