const initialState = {
    items: {},
    current_item: {},
    clicked: false,
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: [action.items]
            };
        case "CLICK":
            return {
                ...state,
                current_item: [action.current_item],
                clicked: true
            };
        case "CLOSECLICK":
            return {
                ...state,
                clicked: false
            }
        default:
            return state
    }
}
export default itemReducer