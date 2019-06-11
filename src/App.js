import React, { Component } from "react";
import key from './key';
import SearchBar from './SearchBar';
import MainVideo from './MainVideo';
import VideoList from './VideoList';

class App extends Component {

constructor(){
  super()
  this.state={
    videos: [],
    isLoading : true,
    search: ""
  }
}
componentDidMount (){
  // console.log(key.API_KEY)
  // debugger
  //  https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDkU0J28tOczWx8WTNMLREeExURxYMJH-8&q=dog&type=video
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key.API_KEY}&q=${this.state.search}&type=video`)
  .then(res => res.json())
  .then(data => {
    this.setState({
      videos: data.items,
      isLoading : false
    })
  })
}

fetchURL=()=>{
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key.API_KEY}&q=${this.state.search}&type=video`)
  .then(res => res.json())
  .then(data => {
    this.setState({
      videos: data.items,
      isLoading : false
    })
  })
}

search = (e) => {
  
  e.preventDefault()

  this.setState({
    search: e.target.firstChild.value
  }, this.fetchURL)
}

  render() {
    
    console.log("App", this.state.videos)

    return <div>
      {this.state.isLoading===false ?
      <div>
      <SearchBar search={this.search}/>
      <MainVideo videos={this.state.videos}/>
      <VideoList videoList={this.state.videos}/>
      </div>
      :
      "loading..."
      }
    </div>;
  }
}

export default App;
