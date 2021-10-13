const initialState = {
    created: false,
    logged_in: false,
    current_user: {},
    users: {},
    errors: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                created: true,
                errors: [action.errors]
            };
        case "LOGGEDIN":
            return {
                ...state,
                current_user: [action.current_user],
                logged_in: true,
                errors: [action.errors]
            }
        case "GETUSERS":
            return {
                ...state,
                users: [action.users]
            }
        default:
            return state;
    }
}
export default userReducer