import React from "react";
import { ButtonSignUp, TypographySignUp, SignUpPageWrapper, FormSignUp, PaperSignUp } from './style';
import {connect} from "react-redux";
import { signUp } from "../../actions/login"
import { goBack, push } from "connected-react-router";
import { routes } from "../Router";
import TextField from '@material-ui/core/TextField';

class SignUpPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            signUpForm: {}
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("token");
      
        ((token !== null) && this.props.gotoFeedPage());
      }

    handleFormSubmit = event => {
        event.preventDefault()
      
        this.props.signUp(this.state.signUpForm);
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            signUpForm: {
                ...this.state.signUpForm,
                [name]: value
            }
        })
    }

    render(){
        const { signUpForm } = this.state        
        return(
            <SignUpPageWrapper>
                <PaperSignUp elevation={3}>
                    
                    <FormSignUp onSubmit={this.handleFormSubmit}>
                        <TypographySignUp variant="h4">Cadastro</TypographySignUp>
                        <TextField 
                            label="Usuário"
                            variant="outlined"
                            name="username"
                            type="text"
                            pattern="[A-Za-z ãé]{5,}"
                            title="Mínimo de 5 caracteres"
                            required
                            onChange={this.handleInputChange}
                            value={signUpForm.name}
                        />
                        <TextField 
                            label="E-mail"
                            variant="outlined"
                            name="email"
                            type="email"
                            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                            title="E-mail inválido"                        
                            required
                            onChange={this.handleInputChange}
                            value={signUpForm.email}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined" 
                            name="password"
                            type="password"
                            pattern="[A-Za-z0-9]{4,8}"
                            required
                            onChange={this.handleInputChange}
                            value={signUpForm.password}
                        />
                        <ButtonSignUp variant="contained" color="primary" type="submit">Cadastrar</ButtonSignUp>
                    </FormSignUp>
                    <ButtonSignUp variant="contained" color="primary" onClick={this.props.goBackOnePage}>Voltar</ButtonSignUp>
                </PaperSignUp>
            </SignUpPageWrapper>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        signUp: (body) => dispatch(signUp(body)),
        gotoFeedPage: () => dispatch(push(routes.feed)),
        goBackOnePage: () => dispatch(goBack())
    }
}





export default connect (null, mapDispatchToProps) (SignUpPage);