import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes, {postOrder} from "./order.action";
import {getTableSuccess} from "../table/table.action";
import { Api } from './Api';

function* addOrderSaga(payload) {

    try {
        const result = yield Api.insertNewOrder(payload);
        if (result === true) {
            debugger
            yield put({ type: actionTypes.FETCH_ORDER, sort: 'desc'});
        }

    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

function* actionWatcher() {
    yield takeLatest(actionTypes.NEW_ORDER, addOrderSaga)
}

function* Watcher() {
    yield all([
        actionWatcher()
    ]);
}

export default Watcher;
