import React, { Component } from 'react';
import CharacterList from './characterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
//import logo from './logo.svg';
import '../style/index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col-md-4">
            <CharacterList />
          </div>
          <div className="col-md-4">
            <HeroList />
          </div>
          <div className="col-md-4">
            <SquadStats />
          </div> 
        </div>     
      </div>
    );
  }
}

export default App;
