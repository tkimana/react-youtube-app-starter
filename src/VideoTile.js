import React, { Component } from "react";



class VideoTile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        return (
            <div>
            <h4>{this.props.video.snippet.title}</h4>
            <h6>{this.props.video.snippet.description}</h6>
            <img src= {this.props.video.snippet.thumbnails.default.url}/>
            
            </div>
        )
    }
}

export default VideoTile