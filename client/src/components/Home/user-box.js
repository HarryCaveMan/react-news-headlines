import React from 'react';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from 'material-ui/ExpansionPanel';
import AppBar from 'material-ui/AppBar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Comment from '../Cards/Comment';
import Reply from '../Article/reply';
import { getArticleWithComments } from '../../utils/API/dbAPI';

class UserBox extends React.Component {

    state = {
        comments:[]
    };

    componentWillReceiveProps () {
        this.loadComments();
    }

    loadComments = () => {
        getArticleWithComments(this.props.articleId)
        .then(res => this.setState(res.data))
    }

    render () {return (
        <div className="user-box">
        <AppBar position="static" >
            <Typography className="ubox-header" variant="title">{this.state.title?
             this.state.title.substring(0,40)||this.state.title : `Hello, ${this.props.user.username}`}</Typography>
            </AppBar>
        <Paper elevation={3} className="user-paper">
            {this.state.comments.length > 0 && this.state.comments.map(comment => Comment(comment))}
        </Paper>
        {this.props.articleId && <ExpansionPanel>
        <ExpansionPanelSummary 
        expandIcon={<ExpandMoreIcon />}> 
          <Typography>Reply</Typography>                       
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>    
          <Reply user={this.props.user} articleId={this.props.articleId}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>}
     </div>
    );}
};
export default UserBox;