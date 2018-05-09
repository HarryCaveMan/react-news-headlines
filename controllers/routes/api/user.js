const mongoose = require("mongoose");

const db = require("../../../models");
const router = require('express').Router();


//Route to get user and populate the articles they have commented in
/*
*req:http get request
*
**@@req.user:user object from the database, added by authenticator
*
*/

router.get("/:id", (req,res) => {
  let userId = req.params.id;
  console.log(userId);
  db.User.findById(userId)
  .populate("articles")
  .then( user => res.json({articles:user.articles}))
  .catch(err => console.log(err));
});

// Route to Create a new comment in the database from post request
/*
*@req:http post request{}
*
*@@req.params.id: mongoDB object id "$oid{}"  //id of article
*
*@@req.user:user object from the database, added by authenticator
*
*@@req.body{
*  { 
*   author:String, //the author of the comment
*   body:String    //the message, or comment itself
*  } 
* }
*}
*
*/
router.post("/article/", (req, res) =>{
  let data = req.body;
  console.log(data);
  //first, create new comment ans store to db
  return db.Article.create({title:data.title,link:data.link})
  //then, push comment id as comment._id and article id as req.params.id to user
  .then( article => {
    return db.User.findOneAndUpdate(
      {_id:data.id}, 
      { $addToSet: {articles: article._id }
       }, 
       { new: true });
  })
  // If the Srticle was updated successfully, send it back to the client 
  .then(user=> res.json(user))
  // If an error occurs, send it back to the client
  .catch(err => {res.json(err);});
});

router.post("/comment/:articleId", (req, res) =>
  //first, create new comment ans store to db
  db.Comment.create({body:req.body.text,author:req.body.username})
  //then, push comment id as comment._id and article id as req.params.id to user
  .then( comment => {
    return db.User.findOneAndUpdate(
      {_id:req.body.userId}, 
      { $addToSet: {comments:comment._id,
                    articles:req.params.articleId }
       }, 
       { new: true })
    //then, push comment id as comment._id and user id as user._id to article
    .then( user => {
      return db.Article.findOneAndUpdate(
      {_id:req.params.articleId},
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

