import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import { Robots } from './Robot';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      Robots : [],
      searchfield : '',
      filterBots :Robots,
    }; 
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(uesr => this.setState({Robots:uesr}))
}

  onSearchChange =(e) =>{
    this.setState({searchfield :e.target.value})
    }
  render() {
    const filterBots = this.state.Robots.filter(Robots => { return Robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());})
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox onSearchChange = {this.onSearchChange}/>
        <Scroll>
        <CardList Robots ={filterBots}/>
        </Scroll>
      </div>
    );
  }
}


export default App;
