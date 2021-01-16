const mongoose = require('mongoose');

// connect mongodb 
mongoose.connect('mongodb://localhost/testdb');

mongoose.connection.once('open',function(){
    console.log("ket noi da duoc thu hien");
}).on('error',function(error){
    console.log("ket noi bi loi, ",error);
})

//SQL :      table ,     row ,   column ,         join ,               primary key
//mongdb : collection,document, field  , embedded documents/linking , primary key 