import React, { Component } from 'react';


class Counter extends Component {

	state = {
		count: 0,
		tags: ['tag1','tag2','tag3']
	};


	renderTags(){
		if (this.state.tags.length === 0) return <p> There are no tags!</p>;
		return <ul>{this.state.tags.map(tag => <li key={tag}>{tag} </li> )}</ul>;
	}

	handleIncrement = () => {
		this.setState({count: this.state.count + 1 })
	}

	render() {
		return <div>
			<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
			<button onClick={this.handleIncrement}
				className="btn btn-primary btn-bg">
				Increment
			</button>
			{ this.state.tags.length === 0   && 'please create a new tag'}
			{this.renderTags()}
		</div>
	}

	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes
	}

	formatCount(){
		const { count  } = this.state;

		//if its 0 return zero otherwise give value of the property itself
		//return count === 0 ? "zero" : count;
		if(count === 1) return  "one"
		else if (count === 4) return "four"
		else return count
	}

}


export default Counter;

