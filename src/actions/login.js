import axios from 'axios';
import { push } from "connected-react-router";
import {routes} from "../containers/Router";


export const signUp = (body) => async (dispatch) =>{

    try{
        const response = await axios.post(
            `https://us-central1-future-apis.cloudfunctions.net/fourEddit/signup`, body
        )

        localStorage.setItem("token", response.data.token);
        dispatch(push(routes.feed));

    } catch(error){
        alert("Erro ao cadastrar o usuario, tente outra vez")
    }
}

export const login = (body) => async (dispatch) =>{

    try{
        const response = await axios.post(
            `https://us-central1-future-apis.cloudfunctions.net/fourEddit/login`, body

        )

        localStorage.setItem("token", response.data.token);
        dispatch(push(routes.feed));
        window.location.reload(false)

    } catch(error){
        alert("Erro ao realizar o login, tente outra vez")
    }
}