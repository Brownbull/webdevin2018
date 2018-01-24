import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import {robots} from "./robots";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        } // eof this.state
    } // eof constructor

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
        // console.log(filteredList); // DEBUG
    } // eof onSearchChange

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => { this.setState({ robots: users }) })
    } // eof componentDidMount

    render(){
        const filteredList = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredList} />
                </div>
            ); // eof return
        } // eof if (robots.length === 0){
    } // eof render
} // eof class App extends React.Component


export default App;