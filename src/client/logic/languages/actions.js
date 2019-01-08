import { GET_LANGUAGES, CREATE_LANGUAGE } from './actionTypes';

export const languagesGet = () => ({
  type: GET_LANGUAGES
});

export const createLanguage = (payload) => ({
  type: CREATE_LANGUAGE,
  payload
});
