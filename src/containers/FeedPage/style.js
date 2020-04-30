import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";

export const FeedPageWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
`

export const CreatePostWrapper = styled.div`
    display: flex;
    justify-content: center;
`

// Form p/ Criar Post

export const FormFeedPage = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TypographyFeedPage = styled(Typography) `
    text-align: center;
    margin-top: 10px;
`

export const ButtonFeedPage = styled(Button) `
    color: #fff;
    font-weight: bold;
`