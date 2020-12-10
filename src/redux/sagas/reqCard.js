import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_REQ_CARDS_FAILURE,
  LOAD_REQ_CARDS_REQUEST,
  LOAD_REQ_CARDS_SUCCESS,
} from '../types';

function loadReqCardsAPI(data) {
  return axios.get(`http://localhost:4000/requests`, data);
}

function* loadReqCards(action) {
  try {
    const result = yield call(loadReqCardsAPI, action.data);
    yield put({
      type: LOAD_REQ_CARDS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_REQ_CARDS_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLoadReqCards() {
  yield takeEvery(LOAD_REQ_CARDS_REQUEST, loadReqCards);
}

export default function* reqCardSaga() {
  yield all([fork(watchLoadReqCards)]);
}
