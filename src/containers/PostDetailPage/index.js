import React from 'react';
import { connect } from "react-redux";
import {routes} from "../Router";
import {replace, goBack} from "connected-react-router"
import CommentCard from '../../components/CommentCard';
import { createComment } from '../../actions/comment';
import { voteComment } from '../../actions/comment';



class PostDetailPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputComment: ''
        }
    }



componentDidMount(){
    const {goToLoginPage,goToFeedPage, postDetails} = this.props
    const token = localStorage.getItem("token");

    {(token === null) && goToLoginPage()}


//FUTURAMENTE DESCOBRIR COMO IMPEDIR DE ENTRAR NESTA PÁGINA SEM TER VINDO DO FEED
    // if(token === null){
    //     goToLoginPage()
    // }else if (postDetails.comment === undefined){
    //     goToFeedPage()
    // }
}

renderComments=()=>{
    const {postDetails} = this.props

    if(postDetails.comments !== undefined){
        return (
            postDetails.comments.map((comment)=>{
                return(
                    //criar componente de card
                    <CommentCard
                        key={comment.id}
                        username={comment.username}
                        text={comment.text}
                        votesCount={comment.votesCount}
                        upVoteComment={() => this.handleVoteComment(comment.userVoteDirection, "UP_VOTE_COMMENT", postDetails.id, comment.id)}
                        downVoteComment={() => this.handleVoteComment(comment.userVoteDirection, "DOWN_VOTE_COMMENT", postDetails.id, comment.id)}
                        voteCommentDirection={comment.userVoteDirection}
                    />                    
                    )
                })
        )
    }
}

handleInputComment = (event) => {
    this.setState({
        inputComment: event.target.value
    })
}

handleSubmit = (event) => {
    const { createComment, postDetails } = this.props
    const { inputComment } = this.state
    const token = localStorage.getItem("token")

    event.preventDefault()

    createComment(token, postDetails.id, inputComment)

    this.setState({
        inputComment: ''
    })
}

handleVoteComment = (currentDirection, type, postId, commentId) => {
    const { upVoteComment, downVoteComment, noVoteComment } = this.props
    const token = localStorage.getItem("token")

    switch(type){
        case "UP_VOTE_COMMENT": {
            const updateVoteComment = () => {
                if(currentDirection === 1){
                    return noVoteComment(postId, commentId, token)
                } else {
                    return upVoteComment(postId, commentId, token)
                }
            }
            return updateVoteComment()
        }

        case "DOWN_VOTE_COMMENT": {
            const updateVoteComment = () => {
                if(currentDirection === -1){
                    return noVoteComment(postId, commentId, token)                
                } else {
                    return downVoteComment(postId, commentId, token)
                }
            }
            return updateVoteComment()
        }
    }
}

render(){

    const { goToFeedPage } = this.props

    return(
        <div>
            FeedDetail
            <button onClick={goToFeedPage}>Voltar</button>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text">Comentário: </label>
                <input 
                    name="text"
                    type="text"
                    onChange={this.handleInputComment}
                    value={this.state.inputComment}
                />                
                
                <button type="submit">Enviar</button>
            </form>

            {this.renderComments()}
        </div>
    )
}

}

const mapStateToProps = (state) =>{
    return{
        postDetails: state.post.postDetails
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage:()=> dispatch(replace(routes.root)),
        goToFeedPage:()=> dispatch(goBack()),
        createComment: (token, postId, commentText) => dispatch(createComment(token, postId, commentText)),
        upVoteComment: (postId, commentId, token) => dispatch(voteComment(1, postId, commentId, token)),
        downVoteComment: (postId, commentId, token) => dispatch(voteComment(-1, postId, commentId, token)),
        noVoteComment: (postId, commentId, token) => dispatch(voteComment(0, postId, commentId, token))
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (PostDetailPage);