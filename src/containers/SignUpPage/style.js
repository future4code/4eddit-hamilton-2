import styled from 'styled-components';

export const ContainerSignUpPage = styled.div `
    color: white;    
    margin: 20px;
`

export const TitleH1 = styled.h1 `
    text-align: center;
`

export const FormSignUpPage = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 1.3em;
    font-weight: bold;
`

export const Button = styled.button `
    border: none;
    padding: 10px;
    border-radius: 3px;
    font-weight: bold;
    background-color: #e1e1e1;
    color: black;
    cursor: pointer;
    margin-top: 10px;
    :hover {
        background-color: #d2d2d2;
    }
`