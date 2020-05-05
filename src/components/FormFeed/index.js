import React from "react";
import TextField from '@material-ui/core/TextField';
import {CreatePostWrapper,FormFeedPage, TypographyFeedPage, ButtonFeedPage} from "./style";

export default class FormFeed extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postForm:{}
        }
    }
    
    handleInputChange = (event) =>{
        const { name, value } = event.target;
    
        this.setState({postForm: {...this.state.postForm, [name]: value}})
    }

    handleSubmit=(event)=>{
        const{postForm}=this.state
        
        event.preventDefault();

        this.props.handleSubmit(postForm);

        this.setState({postForm: {}});    
    }

    render(){

        return(
            <CreatePostWrapper>
                    <FormFeedPage onSubmit={this.handleSubmit}>
                        <TypographyFeedPage variant="h6">Feed de Posts</TypographyFeedPage>
                        <TextField 
                            label="Título"
                            variant="outlined"
                            name={"title"}
                            type={"text"}
                            pattern={"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ 0123456789]{3,}"}
                            title={"O título deve conter pelo menos 3 letras"}
                            value={this.state.postForm.title || ""}
                            onChange={this.handleInputChange}
                            required
                        />
                        
                        <TextField 
                            label="Conteúdo"
                            variant="outlined"
                            name={"text"}
                            type={"text"}
                            value={this.state.postForm.text || ""}
                            onChange={this.handleInputChange}
                            required
                        />
                        <ButtonFeedPage variant="contained" color="primary" type="submit">Postar</ButtonFeedPage>
                    </FormFeedPage>
            </CreatePostWrapper>
        )

    }





}