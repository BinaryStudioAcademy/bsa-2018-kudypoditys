import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  GET_LANGUAGES,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILED
} from './actionTypes';
import languageService from 'client/services/languageService';

function* getLanguages() {
  try {
    const languages = yield call(languageService.getAll);
    yield put({
      type: GET_LANGUAGES_SUCCESS,
      payload: languages
    });
  } catch (err) {
    yield put({
      type: GET_LANGUAGES_FAILED,
      payload: err.message
    });
  }
}

export default function* languagesSaga() {
  yield all([
    takeLatest(GET_LANGUAGES, getLanguages)
  ])
}