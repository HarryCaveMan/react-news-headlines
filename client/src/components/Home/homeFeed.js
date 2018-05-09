import React from 'react';
import Articles from './Articles';

//HomeFeed returns the result of a ternary chain switch
class HomeFeed extends React.Component{
    state = {
        user:this.props.user
    }    
    componentDidMount () {
        console.log(this.props);
    }
    
    render (){return(
    <Articles userId={this.state.user.id} commentCallback={this.props.commentCallback}/>);
    }
}
export default HomeFeed;
