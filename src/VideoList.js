import React, { Component } from "react";
import VideoTile from './VideoTile'




class VideoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // debugger
        return (
            <div>
             {this.props.videoList.map(video => <VideoTile video={video}/>)}

            </div>
        )
    }
}
{/* <App />
<Car tires={this.state.tires}/>
class Car extends React.Component
{
    constructor(props)
    {
        super(props)

        // this.state = {
        //     tires: this.props.tires
        // } //etc.
    }
    
    drive = () =>{
        //drives the car
    }
    park = () =>{
        //parks the car
    }
    render(){
        return (
            {this.props + "are cool"}
            //return some cool JSX and html
        )
    }
}

const Car = (props) => {
    return (props.tires + "are cool")
} */}

export default VideoList