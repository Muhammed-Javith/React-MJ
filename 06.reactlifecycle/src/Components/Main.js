import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';

class Main extends Component { //component for main
    constructor(){
        super();
        this.state = {
            posts: []
                
        }
        this.removephoto = this.removephoto.bind(this);
        console.log('constructor');
    }
    removephoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post!== postRemoved)
        }))
    }
    componentDidMount(){
       const data = SimulateFetchFromDatabase()
       this.setState({
        posts: data
       })
       console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
        alert('componentDidUpdate');
    }
    // componentDidUpdate(prevProps, prevState) {
    //    // alert('componentDidUpdate');
    //     console.log(prevProps);
    //     console.log(prevState);
    // }
    render() {
        console.log('render');
        return <div>
                <Title title={'Photowall'} />
                <PhotoWall posts={this.state.posts} onRemovePhoto = {this.removephoto}/>
               </div>
    }
}
function SimulateFetchFromDatabase(){
    return  [{
        id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" + 
                   "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}
export default Main