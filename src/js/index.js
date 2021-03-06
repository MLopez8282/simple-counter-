import React, { useState } from "react";
import ReactDOM from "react-dom";

/*class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleOne = this.handleOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	handleOne() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne() {
		this.setState(prevState => {
			return {
				count: prevState.count - 1
			};
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}*/
const Counter = () => {
	const [count, setCount] = useState(0);

	const handleOne = () => {
		setCount(count + 1);
	};
	const handleMinusOne = () => {
		setCount(count - 1);
	};

	const handleReset = () => {
		setCount(0);
	};
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleOne}>+1</button>
			<button onClick={handleMinusOne}>-1</button>
			<button onClick={handleReset}>reset</button>
		</div>
	);
};

ReactDOM.render(<Counter />, document.getElementById("app"));
