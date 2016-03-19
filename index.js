'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 8080;
let mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/testAPI';

// connect to db
mongoose.connect(dbURI);

// require models
let Actor = require('./api/models/movie');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes

let apiRouter = express.Router();

apiRouter.use((req, res, next) => {
	console.log('Happening before routes...');
	next();
});

// Generic root route
apiRouter.get('/', (req, res) => {
	res.json({ message: 'hello API!' });
});

apiRouter.route('/movie')
	// create an actor
	.post((req, res) => {
		let movie = new Movie();

		movie.name = req.body.name;
		movie.actor = req.body.actor;

		actor.save(err => {
			if (err) res.send(err);
			res.json({message: 'Movie created'});
		});
	})
	// get all actors
	.get((req, res) => {
		Actor.find((err, actors) => {
			if (err) res.send(err);
			res.json(actors);
		});
	});

// Implements put, delete
apiRouter.route('/movie/:movie_id');

// Register our routes
// all routes will be prefixed with /api
app.use('/api', apiRouter);

app.listen(port);
console.log('On port ' + port);