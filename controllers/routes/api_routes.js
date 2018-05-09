const db = require("../../models");
const router = require('express').Router();



// Route for grabbing a specific Article by id, populate it with it's comment 
/*
*@req:http get request{}
*
*@@req.params.id: mongoDB object id "$oid{}"  //id of article
*
*/
router.get("/article/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Article.findOne({ _id: req.params.id })
    // ..and populate all of the comments associated with it
    .populate("comments")
    .then(function(dbArticle) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      console.log(err);
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route to Create a new comment in the database from post request
/*
*@req:http post request{}
*
*@@req.params.id: mongoDB object id "$oid{}"  //id of article
*
*@@req.body{
*  { 
*   author:String, //the author of the comment
    body:String    //the message, or comment itself
*  } 
* }
*}
*/
router.post("/article/:id", (req, res) =>
  //first, create new comment ans store to db
  db.Comment.create(req.body)
  //then, push comment id as comment._id and article id as req.params.id to user
  .then( comment => {
    return db.User.findOneAndUpdate(
      {_id:"5ad975a5d83e5f34d6b66f50"}, 
      { $addToSet: {comments:comment._id,
                articles: req.params.id }
       }, 
       { new: true })
    //then, push comment id as comment._id and user id as user._id to article
    .then( user => {
      return db.Article.findOneAndUpdate(
      {_id:req.params.id},
      { $addToSet: {comments: comment._id,
                    users: user._id } 
      },
      { new: true });
    });
  })
  // If the Srticle was updated successfully, send it back to the client 
  .then(article => res.json(article))
  // If an error occurs, send it back to the client
  .catch(err => res.json(err))
);

module.exports = router;

