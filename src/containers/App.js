import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import 'tachyons';
import './App.css';
import robots from './robots';
import Scroll from '../components/Scroll';
class App extends Component{
	constructor(){
		super()
		this.state = {    
			robots:[],
			searchfeild:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots : users})});
	}  // this is we fetch the data from internet and keep changing it dynamically 
	onsearchchange = (event) =>{   
         this.setState({ searchfeild: event.target.value})
	}
	render(){
		 const filteredrobots= this.state.robots.filter(robots=>{  
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
		})
		 if(robots.length === 0){
		 	return <h1>Loading</h1>
		 }
		 else{
	     return (
		<React.Fragment>
		<div className='tc'>
		<h1 className='f1'>ROBO FRIENDS </h1>
        <Searchbox searchChange = {this.onsearchchange}/>
        <Scroll>
        <Cardlist robots={filteredrobots}/>
        </Scroll>
        </div>
        </React.Fragment>
		);
}
}
}

export default App;
