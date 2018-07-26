import React, { Component } from 'react';
import tweet from './tweet.jpg';
import github from "./github.png"; 
import './App.css';
import TweetEmbed from 'react-tweet-embed'


const startTime = 1531638600000; //15-07-2018 7:10am GMT
const endTime = 1531888860000 //Wed, 18 Jul 2018 04:41 GMT

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10)/1000; // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = Math.floor(sec_num - (hours * 3600) - (minutes * 60));

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return `${hours} hours, ${minutes} minutes and  ${seconds} seconds`;
}


class Timer extends Component {
  constructor() {
    super();
    this.state = {timeSince:  new Date(Date.now().valueOf() - startTime) }
  }



  componentDidMount() {
    setInterval(() => {
      this.setState({timeSince:  Date.now().valueOf() - startTime }); 
    }, 100); 
  }

  render() {
     return <div className = "timer"> 
        {this.state.timeSince.toString().toHHMMSS()}
      </div> 
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
        <img src={tweet}/> 
          <h1>Has Elon Musk Apologised For This Awful Tweet Yet?</h1>
        </header> 
        
          <h2> YES</h2> 


  <TweetEmbed id='1019472152796381185' />
        <p> It took: </p> 
        <div className ="timer"> 
        {(endTime - startTime).toString().toHHMMSS()}
        </div> 
        <footer> 
          <a href = "https://github.com/dwjohnston/elontweet"><img src = {github}/>  </a> 
        </footer>  
      </div>
    );
  }
}

export default App;
