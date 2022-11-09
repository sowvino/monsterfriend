import React, { Component } from "react";
import { robots } from './robots.js';
import CardList from './Cardlist.js';
import SearchBox from "./SearchBox.js";
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }


}
export default App;