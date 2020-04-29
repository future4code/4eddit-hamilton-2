import axios from 'axios';
import { getPostDetails } from './post';

export const createComment = (token, postId, commentText) => async (dispatch) => {

    const body = {
        text: commentText
    }

    try{
        await axios.post(`https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/comment`, body, {
            headers: {
                'auth': token
            }
        })

        alert("Comentário criado com sucesso!")
        dispatch(getPostDetails(token, postId))

    }catch(error){
        alert("Erro ao criar comentário.")
    }

}