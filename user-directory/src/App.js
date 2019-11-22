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

    this.handleMoveClick = this.handleMoveClick.bind(this);
  }

  handleMoveClick(str){
    if(str === 'next'){
      if (this.state.id === 25){
        this.setState({
          id: 1
        })
      } else {
        this.setState({
          id: this.state.id + 1
        })
      }
    } else if(str === 'prev'){
      if (this.state.id === 1){
        this.setState({
          id: 25
        })
      } else {
        this.setState({
          id: this.state.id - 1
        })
      }
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
          <Toolbar id={this.state.id} moveClick={this.handleMoveClick}/>
        </main>
      </div>
    );
  }
}

export default App;
