import React, { Component } from "react";
import "./App.css";
import Clock from "./components/Clock";
import Header from "./components/Header";
import ShowTimeLimits from "./components/ShowTimeLimits";
import Form from "./components/Form"
const moment = require("moment");

class App extends Component {
  constructor() {
    super();
    this.state = {
      itIsFormTime: true,
      timeLimits: [],
      time: moment().format("HH:mm"),
      newDescription: "",
      newTimeLimit: ""
    };
  }

  // Methods to form actions
  addTimeLimit = event => {
    event.preventDefault();
    const timeLimitObject = {
      description: this.state.newDescription,
      time: this.state.newTimeLimit
    };
    const timeLimits = this.state.timeLimits.concat(timeLimitObject);
    this.setState({
      timeLimits,
      newDescription: "",
      newTimeLimit: ""
    });
    console.log(this.state.timeLimits);
  };
  handleDescription = event => {
    this.setState({ newDescription: event.target.value });
  };

  handleTimeLimit = event => {
    this.setState({ newTimeLimit: event.target.value });
  };

  // Lifecycle methods and tick()-method to hande time
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: moment().format("HH:mm")
    });
  }

  render() {
    
    if (this.state.itIsFormTime) { // in form view, show the form
      return (
        <div className="Form">
          <Header />
          <h2>Time Limits</h2>
          <p>
            Set time limit and write description. You can add extra time limits
            from button "add time limit".
          </p>
          <div>
            <Form sumbit={this.addTimeLimit} newDescription={this.state.newDescription}
              handleDescription={this.handleDescription} newTimeLimit={this.state.newTimeLimit}
              handleTimeLimit={this.handleTimeLimit}/>
            <button
              type="button"
              onClick={() => this.setState({ itIsFormTime: false })}
            >
              Start
            </button>
          </div>
          <ShowTimeLimits timeLimits={this.state.timeLimits} />
        </div>
      );
    } else {                         // in timer view, render timer
      return (
        <div className="Timer">
          <Header />
          <Clock time={this.state.time} />
        </div>
      );
    }
  }
}

export default App;
