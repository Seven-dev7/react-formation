import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre : 'Mon catalogue de Voitures'
  }

  changeTitle = (e) => {
    this.setState({
      titre: 'Titre changé aprés click'
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) => {
      this.setState({
        titre: e.target.value
      })
  }

  render() {
    return (
      <div className="App">
          <Mycars title={this.state.titre}/>
          <button onClick={this.changeTitle}> Changer le nom en dur .</button>
          <button onClick={() => this.changeViaParam('Titre via param')}> Changer le titre via un parametre .</button>
          <button onClick={this.changeViaBind.bind(this, 'Titre changé via Bind')}> Changer le titre avec un bind</button>
          <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );
  }
}

export default App;
