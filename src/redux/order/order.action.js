//import { createAction } from 'redux-actions';

const GET_ORDER = 'order/GET_ORDER';
const NEW_ORDER = 'order/NEW_ORDER';
const FETCH_ORDER = 'order/FETCH_ORDER';
const FETCH_SUCCEEDED = 'order/POST_ORDER';
const POST_ORDER = 'order/POST_ORDER';

const actionTypes = {
    GET_ORDER,
    NEW_ORDER,
    FETCH_ORDER,
    FETCH_SUCCEEDED,
    POST_ORDER
};

export default actionTypes;

export const  getOrder = data => {
    return {
        type: NEW_ORDER,
        payload: {
            data
        }
    }
};

export const  fetchSuccessAction = data => {
    return {
        type: GET_ORDER,
        payload: {
            data
        }
    }
};

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_ORDER,
        error
    }
}

export const  postOrder = payload => {
    debugger
    return {
        type: POST_ORDER,
        payload: {
            payload
        }
    }
};
