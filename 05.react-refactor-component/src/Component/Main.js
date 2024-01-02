import React,{Component} from 'react';
import List from'./List';
import Title from './Title';
class Main extends Component { //component for main
    render() {
        return (
            <div>
                <Title title = {'toDos'}/>
                <List tasks={['Mov the learn','walk out from quizz']} />
            </div>
        )
    }
}
export default Main