import React from "react";
import { Link } from "react-router-dom";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent,CardActions} from "material-ui/Card";
import Typography from 'material-ui/Typography';
import Button from "material-ui/Button";

class Article extends React.Component {

    articleCallBack = event => {
        event.preventDefault();
        this.props.handleSave(this.props.article);
    }

    commentCallback = event => {
        event.preventDefault();
        console.log(event.target.id,"1")
        this.props.commentCallback(event.target.id);
    }

    dateFormat = date =>{
       let thing = new Date(parseInt(date.toString().substring(0,8),16)*1000);
       return `${thing.getMonth()+1}/${thing.getDay()}/${thing.getFullYear()}`
    }

    render () {return(
        <Card>
            <CardHeader className="article-card"
                avatar={
                <Avatar>
                    {this.props.article.title[0]}
                </Avatar>
                }
                title={this.props.article._id ? 
                    this.dateFormat(this.props.article._id) :
              <Button onClick={this.articleCallBack} variant="raised" color="primary" >
                Save
              </Button> }
                subheader={this.props.article.comments ? `${this.props.article.comments.length} comments`: "No Comments"}
            />
            <Link to={`/article/${this.props.article.link}`} target="_blank">
              <CardContent>        
              <Typography variant="display1">{this.props.article.title}</Typography>
              </CardContent>
            </Link>
            {this.props.article._id && <CardActions className="comment-nav">
                
                    <Button id={this.props.article._id} onClick={this.commentCallback} variant="raised" color="primary">
                      Comments
                   </Button>
            </CardActions>}
        </Card>
    
    );}
}

export default Article;