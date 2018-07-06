import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="form">
        <header>Koeajastin</header>
        <Form />
      </div>
    );
  }
}

export default App;
