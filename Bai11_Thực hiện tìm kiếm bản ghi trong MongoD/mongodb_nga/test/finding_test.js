const mocha = require ('mocha');
const assert = require ('assert');
const Personchar = require('../models/personchar');

// mieu ta lai qua trinh tim kiem 
describe('Tim kiem ban ghi (records)', function(){
    // them dl (saving record)
    beforeEach(function(done){
        var character = new Personchar({
            name: 'Toan',
        });
        character.save().then(function(){
            assert(character.isNew === false);
            done();
        });

    });
    // tim 1 ban ghi Find one
    it('tim mot ban ghi tu co so du lieu', function(done){
        Personchar.findOne({name: 'Toan'}).then(function(result){
            assert(result.name === 'Toan');
            done();
        })
    })
})