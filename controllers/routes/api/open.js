const db = require("../../../models");
const router = require('express').Router();
const axios = require('axios');
const cheerio = require("cheerio");

router.get("/scrape", (req,res) => 
  axios.get("https://reddit.com/r/worldnews")
  .then(response =>{
    let $ = cheerio.load(response.data);
        let result = [];
        $("a[class='title may-blank outbound']").each((i,element) => {
          let article = {};
          // Add the text and href of every link, and save them as properties of the result object
          article.title = element.children[0].data;
          article.link = element.attribs.href;
          result.push(article);
        });
        
        res.json({articles:result});
    })
    .catch(err => res.status(500).json(err))
);
// Route for grabbing a specific Article by id, populate it with it's comment 
/*
*@req:http get request{}
*
*@@req.params.id: mongoDB object id "$oid{}"  //id of article
*
*/
 

router.get("/article/:id", (req, res) => {
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

router.post("/register", (req,res) => {
  db.user.create({
    
  });
});

module.exports = router;