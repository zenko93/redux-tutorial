import {put, takeEvery} from 'redux-saga/effects'
import {addCashAction, ASYNC_ADD_CASH, ASYNC_GET_CASH, getCashAction} from "../store/cashReducer";

function* incrementWorker() {
    let sum = Number(prompt())
    yield put(addCashAction(sum))
}

function* decrementWorker() {
    let sum = Number(prompt())
    yield put(getCashAction(sum))
}


export function* counterWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
    yield takeEvery(ASYNC_GET_CASH, decrementWorker)
}