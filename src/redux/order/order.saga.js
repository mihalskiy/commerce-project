import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes, {postOrder} from "./order.action";

const apiInsertNewOrder = 'http://127.0.0.1:8000/orders';

function* getTableSaga(payload) {
    try {
        let response =  fetch(apiInsertNewOrder, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.payload.data)
        });
        yield console.log(`response = ${JSON.stringify(response)}`);
        return yield (response.status === 201);
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

function* actionWatcher() {
    yield takeLatest(actionTypes.GET_ORDER, getTableSaga)
}

function* Watcher() {
    yield all([
        actionWatcher()
    ]);
}

export default Watcher;
