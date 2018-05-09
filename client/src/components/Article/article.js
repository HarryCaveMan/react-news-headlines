import React from "react";
import Paper from "material-ui/Paper";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Comment from "../Cards/Comment";
import Reply from "./reply";
import { getArticleWithComments} from "../../utils/API/dbAPI";

class Article extends React.Component {
  
    state={
        UserId:this.props.user.id,
        articleId:this.props.articleId,
        comments:[]
    }

    componentDidMount = () => this.loadComments();
    
    
    loadComments = () => 
      getArticleWithComments(this.props.articleId)
      .then(res=>{         
          this.setState(res.data);
          console.log(this.state,"STATE");
      });

    render() {
        return (
            <Paper elevation={3} className="left-feed">
               
                <Typography className="article-title" variant="display1">{this.state.title}</Typography>
                {this.state.comments.map(comment => Comment(comment))}
                <ExpansionPanel>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Reply articleId={this.props.articleId} user={this.props.user}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        );

    }
}
export default Article;