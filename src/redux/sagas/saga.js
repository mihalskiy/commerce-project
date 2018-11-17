import { put, takeLatest, all } from 'redux-saga/effects';
import {getTableSuccess} from '../table/table.action'

const arr = [
    {
        name: 'Простой',
        price: '29',
        cent: '99',
        currency: '$',
    },
    {
        name: 'Стандарт',
        price: '99',
        cent: '59',
        currency: '$',
    },
    {
        name: 'Лучший',
        price: '15',
        cent: '45',
        currency: '$',
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
