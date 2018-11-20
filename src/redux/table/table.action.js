import Immutable from 'seamless-immutable';
import { createAction } from 'redux-actions';

const GET_TABLE_PENDING = 'table/GET_TABLE_PENDING';
const GET_TABLE_SUCCESS = 'table/GET_TABLE_SUCCESS';
const GET_TABLE = 'table/GET_TABLE';

const actionTypes = Immutable({
    GET_TABLE_PENDING,
    GET_TABLE_SUCCESS,
    GET_TABLE,
});

export default actionTypes;

export const getTablePending = createAction(actionTypes.GET_TABLE_PENDING);
export const getTableSuccess = createAction(actionTypes.GET_TABLE_SUCCESS);
export const getTable = createAction(actionTypes.GET_TABLE);
