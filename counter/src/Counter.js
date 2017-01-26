import React from "react"

class Counter extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			counter: props.initialProperties
		}
		this.handleDecrementeClick = this.handleDecrementeClick.bind(this)
		this.handleIncrementeClick = this.handleIncrementeClick.bind(this)
	}

	handleIncrementeClick(){
		this.setState({counter: this.state.counter + 1})
	}

	handleDecrementeClick(){
		this.setState({counter: this.state.counter - 1})
	}
	render(){
		const textStyle = {
			color :this.props.color
		}
		return(
		<div>
			<button onClick={this.handleDecrementeClick}>-</button>	
				<span style={textStyle}>A conta está em : {this.state.counter}</span>
			<button onClick={this.handleIncrementeClick}>+</button>
		</div>	
		);
	}
}

export default Counter