//--INITIAL STATE--

const initialState = {
    user_id: null,
    user_email: "",
    username: "",
    user_img: "",
    user_password: ""
};

//--ACTION CONSTANTS--
const SET_USER = "SET_USER";

//--ACTION BUILDERS--
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

//--REDUCER--
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case SET_USER:
            return {...state, ...payload}
        default:
            return state
    }
}