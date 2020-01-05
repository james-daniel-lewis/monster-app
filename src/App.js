import React, { Component } from 'react';
import { CardList } from './components/CardList/CardList'
import { SearchBox } from './components/SearchBox/SearchBox'

import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const myPromise = new Promise((resolve, reject) => {
// if (false) {
//   setTimeout(() => {
//     resolve('i have succeded')
//   }, 1000);
// } else {
//   reject('ah fuck');
// }
// });



// myPromise.then(value => value).then(newValue => console.log(newValue)).catch(rejectedValue => console.log(rejectedValue));

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
    .catch(error => console.log('error'))
  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>monsters rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
