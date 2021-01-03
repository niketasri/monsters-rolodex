import React, { Component } from "react";
import CardList from "./components/card_list/card_list";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(this.state);
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    // const { monsters, searchField } = this.state;
    // const filteredMonsters = monsters.filter((monster) =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase()),
    // );
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search Here' onChange={this.changeHandler} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
