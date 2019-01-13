import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import languageService from "../../services/languageService";

function* getLanguages() {
  try {
    const languages = yield call(languageService.getAll);
    yield put({
      type: actionTypes.GET_LANGUAGES_SUCCESS,
      payload: languages
    });
  } catch (err) {
    yield put({
      type: actionTypes.GET_LANGUAGES_FAILED,
      payload: err.message
    });
  }
}

function* createLanguage(action) {
  try {
    const language = yield call(languageService.create,{name : action.payload});
    yield put({
      type: actionTypes.CREATE_LANGUAGE_SUCCESS,
      payload: language
    });
  } catch (err) {
    yield put({
      type: actionTypes.GET_LANGUAGES_FAILED,
      payload: err.message
    });
  }
}

export default function* languagesSaga() {
  yield all([
    takeLatest(actionTypes.GET_LANGUAGES, getLanguages),
    takeLatest(actionTypes.CREATE_LANGUAGE, createLanguage)
  ])
}