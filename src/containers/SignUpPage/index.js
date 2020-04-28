import React from "react";
import { Button, TitleH1, ContainerSignUpPage, FormSignUpPage } from './style';
import {connect} from "react-redux";
import { signUp } from "../../actions/login"

class SignUpPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            signUpForm: {}
        }
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
            <ContainerSignUpPage>
                
                <TitleH1>Cadastro</TitleH1>
                
                <FormSignUpPage onSubmit={this.handleFormSubmit}>
                    <label htmlFor="username">Usuário:</label>
                    <input 
                        name="username"
                        type="text"
                        pattern="[A-Za-z ãé]{5,}"
                        title="Mínimo de 5 caracteres"
                        required
                        onChange={this.handleInputChange}
                        value={signUpForm.name}
                    ></input>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        name="email"
                        type="email"
                        pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                        title="E-mail inválido"                        
                        required
                        onChange={this.handleInputChange}
                        value={signUpForm.email}
                    ></input>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        name="password"
                        type="password"
                        pattern="[A-Za-z0-9]{4,8}"
                        required
                        onChange={this.handleInputChange}
                        value={signUpForm.password}
                    ></input>
                    <Button type="submit">Cadastrar</Button>
                </FormSignUpPage>
            </ContainerSignUpPage>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        signUp: (body) => dispatch(signUp(body))
    }
}





export default connect (null, mapDispatchToProps) (SignUpPage);