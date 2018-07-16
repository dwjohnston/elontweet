import React, { Component } from 'react';
import tweet from './tweet.jpg';
import github from "./github.png"; 
import './App.css';


const startTime = 1531649400*1000; //15-07-2018 10:10 UTC


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
        
          <h2> NO!</h2> 

          <p> It's been: </p> 

        <Timer/>


        <footer> 
          <a href = "https://github.com/dwjohnston/elontweet"><img src = {github}/>  </a> 
        </footer>  
      </div>
    );
  }
}

export default App;
