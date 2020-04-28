import React from 'react';
import { connect } from "react-redux";
import {routes} from "../Router";
import {replace} from "connected-react-router"



class PostDetailPage extends React.Component{


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

    console.log(postDetails.comments)

    if(postDetails.comments !== undefined){
        return (
            postDetails.comments.map((comment)=>{
                return(
                    //criar componente de card
                    <div>
                        <p>{comment.text}</p>
                    </div>
                    )
                })
        )
    }
}


render(){

    return(
        <div>
            FeedDetail
            
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
        goToFeedPage:()=> dispatch(replace(routes.feed))
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (PostDetailPage);