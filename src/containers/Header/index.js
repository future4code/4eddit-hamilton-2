import React from "react";
import { HeaderWrapper, ImgLogo, ButtonHeader } from "./style"
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
            <ImgLogo src={require('../../img/logo.png')} />

            <ButtonHeader variant="contained" color="secondary" onClick={this.logout}>Logout</ButtonHeader>
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