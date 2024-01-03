import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const tasks = ['go straight', 'Turn the left', 'Start the list'];

class List extends Component { //component for list
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
            </ol>
        )
    }

}
class Title extends Component { //component for title
    render() {
        return (
            <h1> Task List</h1>
        )
    }

}
class Main extends Component { //component for main
    render() {
        return (
            <div>
                <Title />
                <List tasks={tasks} />
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById('root'));