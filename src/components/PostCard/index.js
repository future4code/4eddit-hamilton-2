import React from "react";

export default class PostCard extends React.Component{

render(){
    return(
        <div>
            <p>{this.props.title}</p>
            <p>{this.props.text}</p>
            <p>{this.props.username}</p>
            <button onClick={this.props.getPostDetail}>Post Detail</button>
        </div>
    )
}


}