const initialState={
    posts: [],
    postDetails: []
}

const post = (state = initialState, action) =>{
    switch(action.type){
        case "SET_POSTS":{
            return{...state, posts: action.payload.posts}
        }
        case "SET_POST_DETAILS":{
            return{...state, postDetails: action.payload.postDetails}
        }
        default:
            return state;
    }
}

export default post;