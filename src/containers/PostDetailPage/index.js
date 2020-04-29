import React from 'react';
import { connect } from "react-redux";
import {routes} from "../Router";
import {replace, goBack} from "connected-react-router"
import CommentCard from '../../components/CommentCard';
import { createComment } from '../../actions/comment';



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
                        username={comment.username}
                        text={comment.text}
                        votesCount={comment.votesCount}
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

render(){

    const { goToFeedPage } = this.props

    return(
        <div>
            FeedDetail
            <button onClick={goToFeedPage}>Voltar</button>

            <form onSubmit={this.handleSubmit}>
                <label forHtml="text">Comentário: </label>
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
        createComment: (token, postId, commentText) => dispatch(createComment(token, postId, commentText))
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (PostDetailPage);