import axios from 'axios';

const API_KEY = 'AIzaSyCMqc12PUT-ODh30ze_LvuxT3eU_xQF2cA';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const translateText = (text, targetLanguage) => {
  const response = axios.post(
    `${API_URL}?key=${API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );
   console.log(response.data.data.translations)
  return response.data.data.translations[0].translatedText;
};

export default translateText;