import { all } from 'redux-saga/effects'

import counterSagas from './counter'

export default function* rootSaga() {
  yield all([...counterSagas])
}