import axios from "axios";

const LANGUAGES_BASE_URL = "https://restcountries.com/v3.1";

const getAllLanguages = async () => {
  const response = await axios.get(`${LANGUAGES_BASE_URL}/all`);
  return response.data;
};
