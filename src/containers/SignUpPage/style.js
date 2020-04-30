import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const SignUpPageWrapper = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const PaperSignUp = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 300px;
    margin: 0 auto;
    margin-top: 50px;
`

export const FormSignUp = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 50px;
`

export const TypographySignUp = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;    
`

export const ButtonSignUp = styled(Button) `
    color: #fff;
    font-weight: bold;
`

// import styled from 'styled-components';

// export const ContainerSignUpPage = styled.div `
//     color: white;    
//     margin: 20px;
// `

// export const TitleH1 = styled.h1 `
//     text-align: center;
// `

// export const FormSignUpPage = styled.form `
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//     font-size: 1.3em;
//     font-weight: bold;
// `

// export const Button = styled.button `
//     border: none;
//     padding: 10px;
//     border-radius: 3px;
//     font-weight: bold;
//     background-color: #e1e1e1;
//     color: black;
//     cursor: pointer;
//     margin-top: 10px;
//     :hover {
//         background-color: #d2d2d2;
//     }
// `