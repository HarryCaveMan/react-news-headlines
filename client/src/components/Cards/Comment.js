import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import Typography from 'material-ui/Typography';


const Comment = comment => (
    <Card>
        <CardHeader
            avatar={
            <Avatar aria-label={comment.author}>
                {comment.author[0]}
            </Avatar>
            }
            title={comment.author}
        />
        <CardContent>        
        <Typography variant="Subheading">{comment.body}</Typography>

        </CardContent>
    </Card>
    );

export default Comment;