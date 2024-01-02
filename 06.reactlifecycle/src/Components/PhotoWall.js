import React  from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
//below code using functional component

function PhotoWall(props){
            return <div className="photoGrid">
            {
            props.posts.map((post, index) => <Photo key = {index} post={post} onRemovePhoto ={props.onRemovePhoto} />)
            }
        </div>
}
PhotoWall.ProtoTypes = {
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}


//below code using class component

// class PhotoWall extends Component {
//     render(){
//         return <div className="photoGrid">
//             {this.props.posts.map((post, index) => <Photo key = {index} post={post}/>)}
//         </div>
//     }
// }
export default PhotoWall