import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

export const CommentCardWrapper = styled.div `

`

export const VotesCommentWrapper = styled.div `
    display: flex;
    justify-content: center;
    gap: 8px;
`

export const ArrowThumbsUp = styled(ArrowUpwardIcon) `
    cursor: pointer;
    color: darkgreen;
`

export const ArrowThumbsDown = styled(ArrowDownwardIcon) `
    cursor: pointer;
    color: darkred;
`

export const TypographyUser = styled(Typography) `
    
`
export const TypographyComment = styled(Typography) `

`
export const TypographyVotes = styled(Typography) `

`
export const TypographyVoteDirection = styled(Typography) `

`
export const PaperCommentCard = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
`