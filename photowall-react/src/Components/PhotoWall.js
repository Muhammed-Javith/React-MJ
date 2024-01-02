import React  from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//below code using functional component
function PhotoWall(props){
    return (
        <div>
         
          <Link className="addIcon"  to= "/AddPhoto" ></Link>
          <div className="photoGrid">
            {props.posts
            .sort(function(x,y){
              return y.id - x.id;
            })
            .map((post, index) => (
              <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
            ))}
          </div>
        </div>
      );
//using anchor tag:
// return (
//     <div>
//       <a onClick={props.onNavigate} href= "#AddPhoto" className="addIcon">+</a>
//       <div className="photoGrid">
//         {props.posts.map((post, index) => (
//           <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
//         ))}
//       </div>
//     </div>
//   );
//usign button
    //   return (
    //     <div>
    //       <button className="addIcon" onClick={props.onNavigate}>+ </button>
    //       <div className="photoGrid">
    //         {props.posts.map((post, index) => (
    //           <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
    //         ))}
    //       </div>
    //     </div>
    //   );
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