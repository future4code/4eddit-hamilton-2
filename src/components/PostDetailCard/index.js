import React from 'react'
import { PostDetailCardWrapper, TypographyTitle, TypographyPost, TypographyUser } from './style';
import Typography from '@material-ui/core/Typography';

export default function PostDetailCard(props) {
    return (
        <PostDetailCardWrapper>
            <TypographyTitle>{props.title}</TypographyTitle>
            <br />
            <TypographyPost>{props.text}</TypographyPost>
            <br />
            <TypographyUser>Usuário: {props.username}</TypographyUser>
            <br />
            <Typography>{props.votesCount} Votos</Typography>
            <br />
            <Typography>{props.commentsNumber} Comentários</Typography>
            <br />
        </PostDetailCardWrapper>
    )
}