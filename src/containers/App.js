import React, {Component} from "react";
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from "../components/SearchBox.js";
import ErrorBoundry from "../components/ErrorBoundry.js"
import "./App.css"



class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            response.json().then(users=>this.setState({robots : users}))
        })
    }
    onSearchChange = (event)=>{
        this.setState({searchField : event.target.value})
        
    }
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());})
        
        return !this.state.robots.length ? (<h1 className="tc f1">Loading</h1>):(
                <div className="tc">
                    <h1 className="f2">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    
                    <ErrorBoundry>

                        <CardList robots={filteredRobots}/>

                    </ErrorBoundry>
                        
                    </Scroll>
                    
                </div>
                
            );
        

        
    }

}

export default App;