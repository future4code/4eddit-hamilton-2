import styled from 'styled-components';
import { Typography, Button, Paper } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const PostDetailPageWrapper = styled.div `

`

export const TypographyPostDetailPage = styled(Typography) `
    text-align: center;
`

export const PaperWrapper = styled.div `
    padding: 0 10px;
`

export const PaperDetailPage = styled(Paper) `
    padding: 15px;
`


export const FormPostDetailPage = styled.form `
    margin-top: 15px;
    display: flex;
    flex-direction: column;
`

export const ButtonPostDetailPage = styled(Button) `
    margin-top: 10px;
    color: white;
    font-weight: bold;
`

export const ArrowBack = styled(ArrowBackIcon) `
    cursor: pointer;
    margin-top: 7px;
    margin-left: 7px;
`