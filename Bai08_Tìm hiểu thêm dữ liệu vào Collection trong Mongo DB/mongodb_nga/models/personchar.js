const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

// create Schema and Model
const PersonShema = new Schema({
    name:  String ,
    height : Number,
    weight : Number ,
});
const PersonChar = mongoose.model('personchar',PersonShema);
module.exports = PersonChar ;

// mocha: la 1 package de test