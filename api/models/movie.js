// actors model

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MovieSchema = new Schema({
	name: String,
	actor: String
});

module.exports = mongoose.model('Movie', MovieSchema);