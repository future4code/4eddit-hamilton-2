import axios from 'axios';

export function setPosts(postsFromApi){
    return{
        type: 'SET_POSTS',
        payload:{
            posts: postsFromApi
        }
    }
}




export const getPosts = (token) => async (dispatch) =>{

    const response = await axios.get(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts`,{
            headers:{"auth": token}
        }    
    );

    dispatch(setPosts(response.data.posts));
}
