import React from "react";
import { PostCardWrapper, PaperPostCard, TypographyPostCard, TypographyUser, ButtonPostCard, ArrowThumbsUp, ArrowThumbsDown, VotesWrapper } from './style';


export default class PostCard extends React.Component{

render(){
    return(
        <PostCardWrapper>
            <PaperPostCard>
                <TypographyPostCard variant="h6">{this.props.title}</TypographyPostCard>
                <TypographyPostCard variant="subtitle2">{this.props.text}</TypographyPostCard>
                <TypographyUser variant="subtitle2">Usuário: {this.props.username}</TypographyUser>
                
                <VotesWrapper>
                    <ArrowThumbsUp onClick={this.props.upVote}>+</ArrowThumbsUp>
                    <TypographyPostCard variant="subtitle2">{this.props.numOfVotes}</TypographyPostCard>
                    <ArrowThumbsDown onClick={this.props.downVote}>-</ArrowThumbsDown>
                </VotesWrapper>
                
                
                <TypographyPostCard variant="subtitle2">Direção Voto: {this.props.voteDirection}</TypographyPostCard>
                
                <TypographyPostCard variant="subtitle2">{this.props.numOfComments} comentários</TypographyPostCard>

                <ButtonPostCard variant="contained" color="primary" onClick={this.props.getPostDetail}>Detalhes</ButtonPostCard>
            </PaperPostCard>
        </PostCardWrapper>
    )
}


}