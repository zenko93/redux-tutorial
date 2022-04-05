import {put, takeEvery, call} from 'redux-saga/effects'
import {ASYNC_GET_CUSTOMERS, getCustomersAction} from "../store/customerReducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUsersWorkers() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => data.json())
    yield put(getCustomersAction(json))
}


export function* usersWatcher() {
    yield takeEvery(ASYNC_GET_CUSTOMERS, fetchUsersWorkers)
}