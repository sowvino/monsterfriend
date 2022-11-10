import React, { Component } from "react";
import Scroll from "../components/Scroll.js";
import CardList from '../components/Cardlist.js';
import SearchBox from "../components/SearchBox.js";
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.cypress.io/users').then(response => {
            return response.json();
        }).then(users => this.setState({ robots: users }));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return !this.state.robots.length ? <h1>Loading</h1> :

            <div className="tc">
                <h1 className="f1">Monsterfriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>

                </Scroll>

            </div>

    }


}
export default App;