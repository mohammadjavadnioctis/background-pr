import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import  { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();
    
    
    this.state = {
      monsters: [],
      searchField:''
    };
    
  }

  componentDidMount(){
    fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then(response => response.json())
    .then(users =>this.setState({monsters: users}));
   
    
    
    
  }
 
  handleChange = (e) => {
    console.log('true false',this)
    }

    Myfunc(){
      console.log('this is from my func', this)/*refers to App*/
    }

 render(){
   const { monsters, searchField } = this.state;
   const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    

   // this.Myfunc();
   // this.handleChange();
    
    return(
      
      <div className='App'>
        <h1>Monsters Rolodex</h1>
            <SearchBox
            placeholder='Search Monsters'
            handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}>
        </CardList>
        
        
      </div>
    )
  }


}

 



export default App;

/*

class People {
  constructor(firstName , lastName, job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;

  }

  setFirsName(firstname){
    this.firstName  = firstname;
  };

  setLastName (lastname){
    this.lastName = lastname;
  }

  setJob (job){
    this.job = job;
  }


}


class Workerv5 extends People{
  constructor(wfirstname, wlastame){
    super(wfirstname, wlastame)
    this.job = 'society';
  }
  }

  */

 
 
/*
  
 class Greetings extends Component{
  constructor(){
    const Greet = props => {
      console.log(props)
      return <h1> Hello {props.name} a.k.a {props.heroName} </h1>
    }
  }
  

  render(){
    return(
      <div className = 'App'>
        <Greet name = "Bruce">how you doing</Greet>
      </div>
    )
  }
  


 }
 
  

export default Greetings
*/










