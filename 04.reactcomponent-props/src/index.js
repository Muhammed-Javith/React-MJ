import React,{Component} from 'react';
import ReactDOM  from 'react-dom';


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
            <h1> {this.props.title}</h1>
        )
    }

}
class Main extends Component { //component for main
    render() {
        return (
            <div>
                <Title title = {'toDos'}/>
                <List tasks={['Mov the learn','walk out from compitition']} />
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById('root'));
