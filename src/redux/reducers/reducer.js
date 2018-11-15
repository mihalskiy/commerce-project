import tableReducer from '../table/table.reducer';

const initialState = {};

let AppReducers = (state = initialState, action) => {
const {type, payload} = action;
    switch (action.type) {
        case 'GET_TABLE':
            return { ...state, ...payload}
        case 'GET_TABLE_SUCCESS':
            return { ...state, ...payload}
        default:
            return state;
    }
};

/*const reducer = (state = {}, action) => {
  switch (action.type) {
     case 'GET_TABLE':
        return { ...state, loading: true };
     default:
        return state;
   }
};
export default reducer;*/

export {AppReducers};
export default AppReducers;
