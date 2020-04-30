import axios from 'axios';

export function setPosts(postsFromApi){
    return{
        type: 'SET_POSTS',
        payload:{
            posts: postsFromApi
        }
    }
}

export function setPostDetails(postDetailsFromApi){
    return{
        type: 'SET_POST_DETAILS',
        payload:{
            postDetails: postDetailsFromApi
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

export const createPost = (token, body) => async (dispatch) =>{

    try{
        await axios.post(
            `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts`,body,{
                headers:{"auth": token}
            }
        )
        alert("Post criado com sucesso!");
        dispatch(getPosts(token));
        
    }catch(error){
        alert("Erro ao criar o post, tente novamente");
    }
}

export const getPostDetails = (token, postId) => async (dispatch) =>{

    try{
        const response = await axios.get(
            `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}`,{
                headers:{"auth": token}
            }
        )
        dispatch(setPostDetails(response.data.post));
    }catch(error){
        alert("Erro ao carregar os detalhes do post")
    }
}

export const addVote = (token, postId, direction) => async (dispatch) => {
    const body = {
        direction: direction
    }
    
    await axios.put(`https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/vote`, body, {
        headers: {
            "auth": token
        }
    })    
}