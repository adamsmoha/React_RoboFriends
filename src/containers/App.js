import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/ Scroll'
import './App.css'

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

	// making an HTTP request to get robots data in JSON format on screen load
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}));
	}
	onSearchChange=(event)=>{
		// get value of user input
		this.setState({searchfield:event.target.value})
	}
		
	render(){
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		// when network slows down and it take long to load robots
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}else{
			return(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>

		</div>
	)
		}
		
	}
}

export default App;