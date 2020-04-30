import React from 'react';
import { CommentCardWrapper, TypographyUser, TypographyComment, TypographyVotes, TypographyVoteDirection, VotesCommentWrapper, ArrowThumbsUp, ArrowThumbsDown, PaperCommentCard } from './style';

export default class CommentCard extends React.Component {

    render() {
        return (
            <CommentCardWrapper>
                <PaperCommentCard>
                    <TypographyUser>Usuário: {this.props.username}</TypographyUser>
                    <TypographyComment>Comentário: {this.props.text}</TypographyComment>
                    <TypographyVotes>Qtd Votos: {this.props.votesCount}</TypographyVotes>
                    <TypographyVoteDirection>Direção Voto: {this.props.voteCommentDirection}</TypographyVoteDirection>
                    
                    <VotesCommentWrapper>
                        <ArrowThumbsUp onClick={this.props.upVoteComment}>+</ArrowThumbsUp>
                        <ArrowThumbsDown onClick={this.props.downVoteComment}>-</ArrowThumbsDown>
                    </VotesCommentWrapper>
                </PaperCommentCard>
            </CommentCardWrapper>
        )
    }
}