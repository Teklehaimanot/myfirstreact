import React from 'react';
import { CardList } from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';
// import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters :[ ],
      searchField: ''
    };
     this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users =>this.setState({monsters: users}));
  }

  handleChange =(e)=>
  { this.setState({searchField:e.target.value})};

  render() {
    const {monsters, searchField}  = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()
    ));
         return ( <div className = "App">
        <h1 className= "head">React- demo</h1>
    <SearchBox
    type = 'search'
    placeholder = 'search-monsters'
    handleChange = {this.handleChange}
   />
  <CardList monasters = {filterdMonsters}/>
     
           </div>
   )
 
}
}

export default Car;
