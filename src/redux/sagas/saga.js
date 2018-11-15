import { put, takeLatest, all } from 'redux-saga/effects';
import {getTableSuccess} from '../table/table.action'

const arr = [
    {
        name: 'Простой',
        price: 'price1',
        cent: 'cent1',
        currency: 'currency1',
    },
    {
        name: 'Стандарт',
        price: 'price2',
        cent: 'cent2',
        currency: 'currency2',
    },
    {
        name: 'Лучший',
        price: 'price3',
        cent: 'cent3',
        currency: 'currency3',
    }
];
function* getTableSaga({payload: {tableName}}) {
    const table = arr.find((el)=>{
        return el.name === tableName
    })

    console.log('table',table )
    console.log('tableName', tableName)

    yield put(getTableSuccess(table));
}

function* actionWatcher() {
    yield takeLatest('GET_TABLE', getTableSaga)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}
