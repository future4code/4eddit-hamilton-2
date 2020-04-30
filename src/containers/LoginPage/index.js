import React, { Component } from "react";
import { connect } from "react-redux";
import {login} from "../../actions/login";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { LoginPageWrapper, PaperLogin, FormLogin, TypographyLogin, ButtonLogin } from './style';
import TextField from '@material-ui/core/TextField';


class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      loginForm: {}
    }
  }

componentDidMount(){
  const token = localStorage.getItem("token");

  ((token !== null) && this.props.gotoFeedPage());
}

handleInputChange = event => {
  const {name, value} = event.target

  this.setState({loginForm: {...this.state.loginForm, [name]: value }})
}

handleOnSubmit = event => {
  event.preventDefault();
  this.props.login(this.state.loginForm)
}

  render() {
    
    return (
      <LoginPageWrapper>
        <PaperLogin elevation={3}>          
          <FormLogin onSubmit={this.handleOnSubmit}>
            <TypographyLogin variant="h4">
              Login
            </TypographyLogin>
            <TextField 
              label="E-mail"
              variant="outlined" 
              name={"email"}
              type={"email"} 
              pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
              title={"Digite um e-mail válido!"}
              value={this.state.loginForm.email}
              onChange={this.handleInputChange} 
              required
            />
            
            <TextField 
                label="Senha"
                variant="outlined"
                name={"password"}
                type={"password"}
                pattern="[A-Za-z0-9]{4,8}"
                title={"Senha incorreta!"}
                value={this.state.loginForm.password}
                onChange={this.handleInputChange} 
                required/>
            <br />            
            <ButtonLogin type={"submit"} variant="contained" color="primary">
              Entrar
            </ButtonLogin>
          </FormLogin>
        <TypographyLogin variant="h6">
          Ou...
        </TypographyLogin>
        <ButtonLogin variant="contained" color="primary" onClick={this.props.goToSignUpPage}>Cadastre-se</ButtonLogin>
        </PaperLogin>
      </LoginPageWrapper>
    );
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    login: (body) => dispatch(login(body)),
    gotoFeedPage: () => dispatch(push(routes.feed)),
    goToSignUpPage: () => dispatch(push(routes.signUp))
  }
}



export default connect (null, mapDispatchToProps) (LoginPage);
