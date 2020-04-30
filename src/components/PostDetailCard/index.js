import React from 'react'

export default function PostDetailCard(props) {
    return (
        <div>
            <strong>Usuário: {props.username}</strong>
            <br />
            <strong>Título: {props.title}</strong>
            <br />
            <strong>Post: {props.text}</strong>
            <br />
            <strong>{props.votesCount} Votos</strong>
            <br />
            <strong>{props.commentsNumber} Comentários</strong>
            <br />
        </div>
    )
}