const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
    password: String,

    comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
    }],

    articles:[{
    	type: Schema.Types.ObjectId,
    	ref: "Article"
    }]
});
const User = mongoose.model("User", UserSchema);

module.exports = User;