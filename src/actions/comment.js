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

export const voteComment = (directionVote, postId, commentId, token) => async (dispatch) => {

    const body = {
        direction: directionVote
    }

    const response = await axios.put(`https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, body, {
        headers: {
            'auth': token
        }
    })    

    console.log(response)
}