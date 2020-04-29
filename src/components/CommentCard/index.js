import React from 'react';
import { CommentCardWrapper } from './style';

export default class CommentCard extends React.Component {

    render() {
        return (
            <CommentCardWrapper>
                <p><strong>Usuário: </strong>{this.props.username}</p>
                <p><strong>Comentário: </strong>{this.props.text}</p>
                <p><strong>Qtd Votos: </strong>{this.props.votesCount}</p>
            </CommentCardWrapper>
        )
    }
}