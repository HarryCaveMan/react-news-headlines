import axios from 'axios';

// SCRAPER //

//scrapes articles from Reddit
export function scrape () {
   return axios.get('/api/scrape');
}

// USERS //

// gets all user data
export function getAllUsers () {
    return axios.get('/api/user');
}

// creates a new user
export function createUser (email, userName, password) {
    return axios.post('/api/user');
}

//get specific user
export function getUser (userId) {
    return axios.get('/api/user/' + userId);
}

// returns all of a specified user's posts
export function getAllUserComments (userId) {
    return axios.get('/api/user/' + userId);
}

// updates specified user's password
export function updatePassword (userId, newPassword) {
    return axios.put('/api/user/' + userId , newPassword);
} 

// updates specified user's email
export function updateEmail  (userId, newEmail) {
    return axios.put('/api/user/' +userId,newEmail);
}

// deleta a specified user
export function deleteUser (userId) {
    return axios.delete('/api/user/' +userId);
}

// ARTICLE //

/* Creates a new Article to be associated with a user
 * 
 * @article = {
 *     userId: mongo ObjectId
 *     title: string
 *     link: string(url)
 * }
 */
export function createArticle  (article) {
    console.log(article);
    return axios.post('/api/usr/article/',article)
}

// finds all articles
export function getAllArticles () {
    return axios.get('/api/article');
}

//gets all articles by userId
export function getAllUserArticles (userId) {
    return axios.get('/api/usr/' + userId);

}

// finds all posts for the specified article
export function getArticleWithComments (articleId) {
    return axios.get('/api/article/' + articleId);
}

// Comment //

/* allows user to create new Comment
 * that will be associated with the thread it is in
 * @comment = {
 *    title: string,
 *    userId: int,
 *    text: string
 * }
*/
export function createComment(articleId,comment) {
    return axios.post('/api/usr/comment/' + articleId , comment);
}

// gets the specified comment
export function getComment (commentId) {
    return axios.get('/api/post' + commentId);
}

// allows user or moderator to edit specified comment
export function editComment (newComment) {
    return axios.put('/api/post',newComment);
}

// allows user or moderator to delete specified comment
export function deleteComment (commentId) {
    return axios.delete('/api/post' + commentId);
}