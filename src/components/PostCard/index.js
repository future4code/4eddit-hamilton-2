import React from "react";
import { PostCardWrapper } from './style';

export default class PostCard extends React.Component{

render(){
    return(
        <PostCardWrapper>
            <p>{this.props.title}</p>
            <p>{this.props.text}</p>
            <p>{this.props.username}</p>
            <button onClick={this.props.getPostDetail}>Post Detail</button>
            <button onClick={this.props.upVote}>+</button>
            <button onClick={this.props.downVote}>-</button>
            <hr />
            <strong>Votos: {this.props.numOfVotes}</strong>
            <br />
            <strong>Direção Voto: {this.props.voteDirection}</strong>
            <br />
            <strong>Quantidade de Comentários: {this.props.numOfComments}</strong>
        </PostCardWrapper>
    )
}


}