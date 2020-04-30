import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const PostCardWrapper = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const PaperPostCard = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 300px;
    margin: 0 auto;
    margin-top: 50px;
`

export const TypographyPostCard = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;    
`

export const TypographyUser = styled(Typography) `
    font-style: italic;
    color: lightgray;
`

export const ButtonPostCard = styled(Button) `
    color: #fff;
    font-weight: bold;
`

// Votos

export const ArrowThumbsUp = styled(ArrowUpwardIcon) `
    cursor: pointer;
    color: darkgreen;
`

export const ArrowThumbsDown = styled(ArrowDownwardIcon) `
    cursor: pointer;
    color: darkred;
`

export const VotesWrapper = styled.div `
    display: flex;
    justify-content: center;
    gap: 8px;
`