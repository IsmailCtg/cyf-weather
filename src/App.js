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
        <form>
          <input type="text" name="FirstName" value="Type in a city name"/> 
          <input type="submit" value="Find Weather" this.Text= string.empty/>
          
        </form>
        Ismail
        <main className="app__main">
        </main>
      </div>
    );
  }
}

export default App;
