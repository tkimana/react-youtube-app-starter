import React, { Component } from "react";





class MainVideo extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let myVideo = this.props.videos[0]
        // debugger
        const embedUrl = `https://www.youtube.com/embed/${myVideo.id.videoId}`
        console.log("MainVideo",this.props.videos[0])
        
        // debugger
        return (
            <div>
           {/* <iframe>{this.props.videos}</iframe> */}
                <h1>{this.props.videos[0].snippet.title}</h1>
                <iframe src={embedUrl}></iframe>
                <p>{this.props.videos[0].snippet.description}</p>
            </div>
        )
    }
}

export default MainVideo