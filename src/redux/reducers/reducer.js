import { combineReducers } from 'redux';
import TaleReducer from '../table/table.reducer';
// TODO: define new reducers here

export default () => combineReducers({
    table: TaleReducer
    // TODO: include new reducers here
});
