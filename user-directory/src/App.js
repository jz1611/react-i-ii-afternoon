import React from 'react';
import InfoCard from './components/InfoCard';
import './reset.css';
import './App.css';
import Toolbar from './components/Toolbar';
import data from './info/data';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: 1
    }
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1>Home</h1>
        </header>
        <main>
          <InfoCard id={this.state.id} data={data}/>
          <Toolbar id={this.state.id}/>
        </main>
      </div>
    );
  }
}

export default App;
