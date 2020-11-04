const initialState = {
    isLoggedIn: false,
    username: ""
}

const authReducer = (state = initialState, action) => {
    console.log("state: ", state);
    console.log("action: ", action);

    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                username: action.payload.username
            }
        case "LOGOUT":
            return initialState
        default:
            return initialState
    }
}

export default authReducer