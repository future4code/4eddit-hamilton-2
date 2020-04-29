import React from "react";
import {HeaderWrapper} from "./style"
import { replace } from "connected-react-router";
import { routes } from '../Router';
import { connect } from "react-redux";

class Header extends React.Component{


logout = () => {
    localStorage.clear()
    this.props.goToLoginPage()
}

render(){    
    return(
        <HeaderWrapper>
            HEADER
            <button onClick={this.logout}>Sair</button>
        </HeaderWrapper>
    )
}

}

const mapDispatchToProps = (dispatch) => {
    return {
        goToLoginPage: () => dispatch(replace(routes.root))
    }
}

export default connect(null, mapDispatchToProps)(Header);