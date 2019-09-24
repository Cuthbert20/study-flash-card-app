//--INITIAL STATE--

const initialState = {
    user_id: null,
    username: "",
    user_img: "",
    user_password: ""
};

//--ACTION CONSTANTS--


//--ACTION BUILDERS--


//--REDUCER--
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        default:
            return state
    }
}