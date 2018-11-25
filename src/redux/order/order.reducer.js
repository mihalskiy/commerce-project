import Immutable from 'seamless-immutable';

import OrderAction from './order.action';
import initialState from '../store/initialState';

export const INITIAL_STATE = Immutable(initialState.order);

function reducer(state = initialState.order, action = {}) {
    const { type = '', payload = {} } = action;
    const {
        loading,
    } = payload;
    switch (type) {
        case OrderAction.GET_ORDER :
            return state.merge({
                loading: false,
                ...payload
            });
        case OrderAction.POST_ORDER :
            return state.merge({
                loading: false,
                ...payload
            });
        default:
            return state;
    }
}

export default reducer;
