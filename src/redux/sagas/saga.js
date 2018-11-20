import { all } from 'redux-saga/effects';
import TableSaga from '../table/table.saga';
// import PaginationSaga from '@pagination/PaginationSaga';
// TODO: define new sagas here

export default function* rootSaga() {
    yield all([
        TableSaga(),
        // PaginationSaga(),
        // TODO: include new sagas here
    ]);
}
