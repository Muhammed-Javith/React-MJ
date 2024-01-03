import React from 'react';

//stateless function level components
function Title(props){
    return <h1>{props.title}</h1>
}

//class level components
// class Title extends Component { //component for main
//     render() {
//         return <h1>{this.props.title}</h1>
//     }
// }
export default Title