import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList.component'
import { SearchBox } from './components/searchBox/searchBox.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) => {
    this.setState({ searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  render() {
   const { monsters, searchField } = this.state;
   const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  )
  return (
    <div className= 'App'>
      <h1> MOnsters Rolodex </h1>
      <SearchBox 
        placeholder ='search monsters' 
        handleChange = { this.handleChange }
      />
      <CardList monster = { filteredMonsters } />
    </div>
  );
}
}

export default App;


