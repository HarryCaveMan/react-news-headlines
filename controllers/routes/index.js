//router for api
const api = require('./api');
const path = require('path');
const router = require('express').router();

//export routers to main
	router.use('/api', api.open);
	router.use('/api/usr', api.user);
	router.use((req, res) =>
	    res.sendFile(
			path.join(
				__dirname, 
				'../../client/build/index.html'
			)
		)
	);
module.exports = router;