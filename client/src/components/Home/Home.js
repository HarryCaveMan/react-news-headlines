import React, { Component } from 'react';

import HomeFeed from './homeFeed';
import UserBox from './user-box';
export default class Home extends Component {
    state={
        user:{
            username:"Harris",
            id:"5af25050f36d2837eae85a2b",
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