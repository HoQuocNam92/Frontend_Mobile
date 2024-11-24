const initiaLState = {
    addItems: [],
};
const RootReducer = (state = initiaLState, action) => {
    switch (action.type) {
        case 'addItems':
            return {
                ...state,
                addItems: [...state.addItems, action.payload],
            };
        case 'deleteItems':
            return {
                ...state,
                addItems: state.addItems
                    .map(innerArray => innerArray.filter(item => item._id !== action.payload))
                    .filter(innerArray => innerArray.length > 0),
            };

        default:
            return state;
    }
};
export default RootReducer;
