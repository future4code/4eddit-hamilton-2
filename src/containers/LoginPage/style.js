import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const LoginPageWrapper = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const PaperLogin = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 300px;
    margin: 0 auto;
    margin-top: 50px;
`

export const FormLogin = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 50px;
`

export const TypographyLogin = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;    
`

export const ButtonLogin = styled(Button) `
    color: #fff;
    font-weight: bold;
`