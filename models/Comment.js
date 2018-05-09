const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const CommentSchema = new Schema({
  // `author` is a mongo ObjectId for a user
  author: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
const Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;