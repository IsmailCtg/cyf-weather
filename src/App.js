import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="app">
        <header className="app__header">
        <h2>Say Hello to Todays Weather Ismail</h2>
       </header>
       Ismail
        <div className="top">
          <form>
          <input type="text" name="FirstName" value="Type in a city name"/> 
          <input type="submit" value="Find Weather"/>
          </form>
          </div>

          <div class="temp">
          <h3>Temperature</h3>
          <h4>Humidity</h4>
          <h4>Pressure</h4>
          </div>

          
        <div>
          
        </div>
        <main className="app__main">
        </main>
      </div>
    );
  }
}

export default App;
