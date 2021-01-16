const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');

// Mieu ta qua trinh ktra 
describe('Mieu ta them du lieu :', function(){
    it('Them 1 ban ghi vao co so du lieu', function(done){
        // tao dl cho doi tuong character
        var character = new PersonChar({
            name:  'sky albert'
        });
        //them dl , save() giong insert : kiem tra dk 
        character.save().then(function(){
            assert(character.isNew === false);
            done();
        })
    })
});