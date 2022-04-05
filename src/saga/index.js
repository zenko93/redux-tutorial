import {all} from "redux-saga/effects"
import {usersWatcher} from "./userSaga";
import {counterWatcher} from "./countSaga";


export function* rootWatcher() {
    yield all([usersWatcher(), counterWatcher()])
}