import React, { Component } from 'react';

import HomeFeed from './homeFeed';
import UserBox from './user-box';
export default class Home extends Component {
    state={
        user:{
            username:"Harris",
            id:"5af19ffb090b035fb24772a2",
        },
        articleId:null
    }

    loadComments = articleId =>{
        this.setState({articleId:articleId})
    }
    render(){

        return (
            <React.Fragment>
                <HomeFeed user={this.state.user} commentCallback={this.loadComments}/>
                <UserBox user={this.state.user} articleId={this.state.articleId}/>
            </React.Fragment>
        )
    }
};