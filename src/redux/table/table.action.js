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

export function getTable(tableName) {


    console.log('eeeee', tableName)

    return {
        type: GET_TABLE,
        payload: {tableName}
    }

}
