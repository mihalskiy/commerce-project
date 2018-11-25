const apiInsertNewOrder = 'http://127.0.0.1:8000/orders';


//send POST request to add new Order
function* insertNewOrder(payload) {
    try {
        let response =  fetch(apiInsertNewOrder, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.payload.data)
        });
        yield console.log(`response = ${JSON.stringify(response)}`);
        return yield response;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export const Api = {
    insertNewOrder
};
