import React, { Component} from 'react';
import './App.css';
import { CardList }  from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box.component/search-box.component';


class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchFiled : ''
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(user => this.setState({ monsters : user}))
    
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
      <SearchBox
          placeholder='Search Monsters'
          handleChange = {typeValue => this.setState({searchFiled: typeValue.target.value})} 
      /> 
        
        <CardList monsters={filteredMonster}/>
      </div>
    );
  } 
}

export default App;
