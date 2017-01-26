import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"

class App extends Component {
  render() {
    return (
      <div>
      	<Counter initialProperties={10} color="blue"/>
      	<Counter initialProperties={20} color="red"/>
      	<Counter initialProperties={30} color="black"/>
      </div>
    );
  }
}

export default App;
