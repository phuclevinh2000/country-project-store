import { takeLatest, call, put } from "redux-saga/effects"
import fetchCountries from "../actions/country"
import fetchData from "./Api"
import {FETCH_COUNTRIES_SAGA} from "../../types/types"

function * fetchDataWithSaga(): any {
  const response = yield call(fetchData)
  yield put(fetchCountries(response))
}

export default [ takeLatest(FETCH_COUNTRIES_SAGA, fetchDataWithSaga)]