import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {login} from "../../actions/login";
import { routes } from "../Router";
import { push } from "connected-react-router";


const LabelColor = styled.label` /*tirar quando for tirar o roxo*/
  color: white;
`;

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
  console.log(this.state.loginForm);

  this.props.login(this.state.loginForm)
}

  render() {
    
    return (
      <form onSubmit={this.handleOnSubmit}>
        <LabelColor forHtml={"email"}>E-mail:</LabelColor>
        <input name={"email"}
            type={"email"} 
            pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
            title={"Digite um e-mail válido!"}
            value={this.state.loginForm.email}
            onChange={this.handleInputChange} 
            required/>
        <br/>

        <LabelColor forHtml="password">Senha:</LabelColor>
        <input 
            name={"password"}
            type={"password"}
            pattern="[A-Za-z0-9]{4,8}"
            title={"Senha incorreta!"}
            value={this.state.loginForm.password}
            onChange={this.handleInputChange} 
            required/>

        <button type={"submit"}>Entrar</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    login: (body) => dispatch(login(body)),
    gotoFeedPage: () => dispatch(push(routes.feed))
  }
}



export default connect (null, mapDispatchToProps) (LoginPage);
