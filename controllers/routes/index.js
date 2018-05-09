//router for api
const api = require('./api');
const path = require('path');

//export routers to main
module.exports = (app) =>{
	app.use('/api', api.open);
	app.use('/api/usr', api.user);
	app.use((req, res) =>
	    res.sendFile(
			path.join(
				__dirname, 
				'../../client/build/index.html'
			)
		)
	);
}