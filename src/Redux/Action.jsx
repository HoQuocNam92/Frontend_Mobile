// Action.js
const addItemsAction = data => ({
    type: 'addItems',
    payload: data,
});

const removeItemAction = productId => ({
    type: 'deleteItems',
    payload: productId,
});

export { addItemsAction, removeItemAction };
