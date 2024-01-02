import React,{Component} from 'react';
class Title extends Component { //component for title
    render() {
        return (
            <h1> {this.props.title}</h1>
        )
    }

}
export default Title