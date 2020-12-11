import { all, fork } from 'redux-saga/effects';
import reqCardSaga from './reqCard';

export default function* rootSaga() {
  yield all([fork(reqCardSaga)]);
}
