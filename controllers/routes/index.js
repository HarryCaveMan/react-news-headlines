//router for api
const api = require('./api');

//export routers to main
module.exports = (app) =>{
	app.use('/api', api.open);
	app.use('/api/usr', api.user);
};