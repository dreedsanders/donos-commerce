const initialState = {
    created: false,
    loggedin: false,
    current_user: null,
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
                loggedin: true,
                errors: [action.errors]
            }
        case "GETUSERS":
            return {
                ...state,
                users: [action.users]
            };
        case "LOGGEDOUT":
            return {
              ...state,
              current_user: [action.current_user],
              logged: [action.logged],
            };
        default:
            return state;
    }
}
export default userReducer