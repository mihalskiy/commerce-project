//import { createAction } from 'redux-actions';

const GET_ORDER = 'table/GET_ORDER';
const POST_ORDER = 'table/POST_ORDER';

const actionTypes = {
    GET_ORDER,
    POST_ORDER
};

export default actionTypes;

export const  getOrder = data => {
    return {
        type: GET_ORDER,
        payload: {
            data
        }
    }
};

export const  postOrder = payload => {
    debugger
    return {
        type: POST_ORDER,
        payload: {
            payload
        }
    }
};
