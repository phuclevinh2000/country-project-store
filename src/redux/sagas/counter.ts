import { takeLatest } from 'redux-saga/effects'

import { ADD_COUNTER, AddCOunterAction } from "../../types/types"

function* doSomethingWhenAddingProduct(action: AddCOunterAction) {
  yield console.log(action)
}

export default [takeLatest(ADD_COUNTER, doSomethingWhenAddingProduct)]
