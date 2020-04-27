import React from 'react';
import {CreatePostWrapper, FeedPageWrapper} from "./style";


class FeedPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postForm:""
        }
    }

handleInputChange = (event) =>{
    const { name, value } = event.target;

    this.setState({postForm: {...this.state.postForm, [name]: value}})
}

handleSubmit = (event) =>{
    event.preventDefault();

    //ligar com a action

    console.log(this.state.postForm)
}


render(){
    const {postForm}=this.state

    return(
        <FeedPageWrapper>
            <div>
                <h3>FeedPage</h3>
            </div>

            <CreatePostWrapper>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={"title"}>Título</label>
                    <input name={"title"}
                        type={"text"}
                        pattern={"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ 0123456789]{3,}"}
                        title={"O título deve conter pelo menos 3 letras"}
                        value={postForm.title || ""}
                        onChange={this.handleInputChange}
                        required
                    /><br/>
                    <label htmlFor={"text"}>Conteúdo</label>
                    <input name={"text"}
                        type={"text"}
                        value={postForm.text || ""}
                        onChange={this.handleInputChange}
                        required
                    /><br/>
                    <button type="submit">Postar</button>
                </form>
            </CreatePostWrapper>


        </FeedPageWrapper>
    )
}

}

export default FeedPage;