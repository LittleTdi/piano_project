const express=require('express');
const bodyparser=require('body-parser');
const userRouter=require('./routes/user.js');
var server=express();
server.listen(8080);
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:false
}));

server.user('/user',userRouter);