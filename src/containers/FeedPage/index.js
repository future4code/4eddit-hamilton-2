import React from 'react';
import {CreatePostWrapper, FeedPageWrapper} from "./style";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import {routes} from "../Router";
import {getPosts, createPost, getPostDetails} from "../../actions/post";
import PostCard from "../../components/PostCard";


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

renderPosts = () =>{
    const {posts} = this.props

    return (
        posts.map((element)=>{
            return (
                <PostCard
                    key={element.id}
                    title={element.title}
                    username={element.username}
                    text={element.text}
                    getPostDetail={()=>this.handleGetPostDetails(element.id)}
                />
            )
        })
    )
}



render(){
    const {postForm}=this.state

    return(
        <FeedPageWrapper>
            <div>
                <h3>FeedPage</h3>
            </div>

            <CreatePostWrapper>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={"title"}>Título</label>
                    <input name={"title"}
                        type={"text"}
                        pattern={"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ 0123456789]{3,}"}
                        title={"O título deve conter pelo menos 3 letras"}
                        value={postForm.title || ""}
                        onChange={this.handleInputChange}
                        required
                    /><br/>
                    <label htmlFor={"text"}>Conteúdo</label>
                    <input name={"text"}
                        type={"text"}
                        value={postForm.text || ""}
                        onChange={this.handleInputChange}
                        required
                    /><br/>
                    <button type="submit">Postar</button>
                </form>
            </CreatePostWrapper>

            {this.renderPosts()}

        </FeedPageWrapper>
    )
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
        goToPostDetailPage: ()=> dispatch(push(routes.postDetail))
    }
}



export default connect (mapStateToProps, mapDispatchToProps) (FeedPage);