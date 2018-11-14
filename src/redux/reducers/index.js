import tableReducer from '../table/table.reducer';

const initialState = {};

const AppReducers = (state = initialState, action) => {
const {type, payload} = action;
    switch (action.type) {
        case 'GET_TABLE':
            console.log("Vote GET_TABLE!");
            return (
                Object.assign(
                    {},
                    state,
                    {
                        tableName: payload.tableName
                    }
                )
            );
        default:
            return state;
    }
};


export {AppReducers};
export default AppReducers;
