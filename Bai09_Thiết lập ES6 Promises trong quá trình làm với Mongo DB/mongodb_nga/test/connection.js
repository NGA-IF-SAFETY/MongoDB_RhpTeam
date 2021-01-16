const mongoose = require('mongoose');

//ES6 promises lam cho ko xuat hien promises mac dinh nua
mongoose.Promise = global.Promise;

// connect mongodb 
before(function (done) {
    mongoose.connect('mongodb://localhost/testdb');
    mongoose.connection.once('open', function () {
        console.log("ket noi da duoc thu hien");
        done();
    }).on('error', function (error) {
        console.log("ket noi bi loi, ", error);
    })
})

//SQL :      table ,     row ,   column ,         join ,               primary key
//mongdb : collection,document, field  , embedded documents/linking , primary key 