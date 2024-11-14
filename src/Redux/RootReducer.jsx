const initiaLState = {
    addItems: [],
};
const RootReducer = (state = initiaLState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'addItems':
            return {
                ...state,
                addItems: [...state.addItems, action.payload],
            };

        default:
            return state;
    }
};
export default RootReducer;
