import React from 'react';
import {CreatePostWrapper, FeedPageWrapper, FormFeedPage, TypographyFeedPage, ButtonFeedPage} from "./style";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import {routes} from "../Router";
import {getPosts, createPost, getPostDetails, addVote} from "../../actions/post";
import PostCard from "../../components/PostCard";
import TextField from '@material-ui/core/TextField';


class FeedPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postForm:""
        }
    }

componentDidMount(){
    const {goToLoginPage, getPosts} = this.props
    const token = localStorage.getItem("token");

    ((token === null) ? goToLoginPage() 
                      : getPosts(token) );
}


handleInputChange = (event) =>{
    const { name, value } = event.target;

    this.setState({postForm: {...this.state.postForm, [name]: value}})
}

handleSubmit = (event) =>{
    const {createPost} = this.props
    event.preventDefault();

    const token = localStorage.getItem("token");

    createPost(token, this.state.postForm);
    
    this.setState({postForm: ""});    
}

handleGetPostDetails = (postId) =>{
    const {getPostDetails, goToPostDetailPage} = this.props
    const token = localStorage.getItem("token");

    getPostDetails(token, postId);
    goToPostDetailPage();
}

handleVote = (currentDirection, token, postId, type) =>{
    const { noVote, upVote, downVote } = this.props
    
    switch(type){
        case "UP_VOTE": {
            const updateVote = () => {
                if(currentDirection === 1) {
                    return noVote(token, postId)
                } else {
                    return upVote(token, postId)
                }
            }
            return updateVote()
        }

        case "DOWN_VOTE": {
            const updateVote = () => {
                if(currentDirection === -1) {
                    return noVote(token, postId)
                } else {
                    return downVote(token, postId)
                }
            }
            return updateVote()
        }
    }
}

renderPosts = () =>{
    const {posts} = this.props
    const token = localStorage.getItem("token");

    const postsInOrder = posts.sort((b, a) => 
        a.votesCount - b.votesCount
    )

    return (        
        postsInOrder.map((element)=>{
            return (
                <PostCard
                    key={element.id}
                    title={element.title}
                    username={element.username}
                    text={element.text}
                    getPostDetail={()=>this.handleGetPostDetails(element.id)}
                    upVote={()=>this.handleVote(element.userVoteDirection, token, element.id, "UP_VOTE")}
                    downVote={()=>this.handleVote(element.userVoteDirection, token, element.id, "DOWN_VOTE")}
                    numOfVotes={element.votesCount}
                    voteDirection={element.userVoteDirection}
                    numOfComments={element.commentsCount}
                />
            )
        })
    )
}



render(){
    const {postForm}=this.state
    
    if(this.props.posts.length < 1){
        return (
            <div>
                <h3>Carregando...</h3>
            </div>
        )
    } else {
    
        return(
            <FeedPageWrapper>
                <CreatePostWrapper>
                    <FormFeedPage onSubmit={this.handleSubmit}>
                        <TypographyFeedPage variant="h6">Feed de Posts</TypographyFeedPage>
                        <TextField 
                            label="Título"
                            variant="outlined"
                            name={"title"}
                            type={"text"}
                            pattern={"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ 0123456789]{3,}"}
                            title={"O título deve conter pelo menos 3 letras"}
                            value={postForm.title || ""}
                            onChange={this.handleInputChange}
                            required
                        />
                        
                        <TextField 
                            label="Conteúdo"
                            variant="outlined"
                            name={"text"}
                            type={"text"}
                            value={postForm.text || ""}
                            onChange={this.handleInputChange}
                            required
                        />
                        <ButtonFeedPage variant="contained" color="primary" type="submit">Postar</ButtonFeedPage>
                    </FormFeedPage>
                </CreatePostWrapper>

                {this.renderPosts()}

            </FeedPageWrapper>
        )
    }
}

}

const mapStateToProps = (state) =>{
    return{
        posts: state.post.posts
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(replace(routes.root)),
        getPosts: (token) => dispatch(getPosts(token)),
        createPost: (token, body) => dispatch(createPost(token, body)),
        getPostDetails: (token, postId) => dispatch(getPostDetails(token, postId)),
        goToPostDetailPage: ()=> dispatch(push(routes.postDetail)),
        upVote: (token, postId) => dispatch(addVote(token, postId, 1)),
        downVote: (token, postId) => dispatch(addVote(token, postId, -1)),
        noVote: (token, postId) => dispatch(addVote(token, postId, 0))
    }
}



export default connect (mapStateToProps, mapDispatchToProps) (FeedPage);