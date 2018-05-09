import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import TextField from 'material-ui/TextField';
import Typography from "material-ui/Typography"
import Button from "material-ui/Button";
import { createComment} from "../../utils/API/dbAPI";


class Reply extends React.Component {
    state = {
        userId:this.props.user.id,
        username:this.props.user.username,
        articleId:this.props.articleId,
        text : ""
    } 
    
    inputHandler = event => {
        event.preventDefault();
      this.setState({ text: event.target.value });
      console.log(this.state.text);      
    }

    formSubmit = event => {
        createComment(this.props.articleId,this.state);
        console.log(this.state,"Post")
    }
    
    render () {return(
    <form className="reply-form" onSubmit={this.formSubmit}>   
    <Card className="reply-card">
        <CardHeader className="post-submit"
            avatar={
            <Avatar aria-label={this.state.username}>
                C
            </Avatar>
            }
            title={
                <Button type="submit"  variant="raised" color="primary" >
                Post
              </Button>
            }
            subheader="May 2, 2018"
        />
        <CardContent>            
            <TextField
                multiline
                hintText="Full width"
                fullWidth={true}
                onChange={this.inputHandler}
            />       
            <Typography variant="Subheading">{this.state.text}</Typography>
        </CardContent>
    </Card>
    </form>
    );}
  }
export default Reply;