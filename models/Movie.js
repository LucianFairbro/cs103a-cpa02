'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    title: String,
    year: Number,
    cast: Mixed,
    genres: Mixed,

    //step3
    strTimes: [String],
} );

module.exports = mongoose.model( 'Movie', courseSchema );
