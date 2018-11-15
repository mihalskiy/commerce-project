export const tableAction = {
    CHANGE: 'CHANGE'
}

/*
export function change (error) {
    return {
        type: actionTypes.CHANGE,
        error
    }
}

export function increment () {
    return {type: actionTypes.CHANGE}
}

export function decrement () {
    return {type: actionTypes.CHANGE}
}

export function reset () {
    return {type: actionTypes.RESET}
}

export function loadData () {
    return {type: actionTypes.CHANGE}
}

export function loadDataSuccess (data) {
    return {
        type: actionTypes.CHANGE,
        data
    }
}

export function startClock () {
    return {type: actionTypes.START_CLOCK}
}

export function tickClock (isServer) {
    return {
        type: actionTypes.TICK_CLOCK,
        light: !isServer,
        ts: Date.now()
    }
}
*/

const GET_TABLE = 'GET_TABLE';
const GET_TABLE_SUCCESS = 'GET_TABLE_SUCCESS';

export function getTable(tableName) {
    return {
        type: GET_TABLE,
        payload: {
            tableName: tableName.currentTarget.dataset.value
        }
    }

}

export function getTableSuccess(payload) {
    console.log('payload', payload)
    return {
        type: GET_TABLE_SUCCESS,
        payload
    }
}
