/**
 * Module dependencies.
 */
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var connection  = require('express-myconnection');
//load blogs route
var routes = require('routes');
var blogs = require('./routes/blogs');
var app = express();
//set and use module
app.set('view engine', 'ejs');
app.use('/static', express.static('public'));
app.use(express.json());
/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request
-------------------------------------------*/
app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password: '123456',
        port : 3306, //port mysql
        database: 'blog'
    },'request')
);
app.get('/', routes.index);//route index
app.get('/blogs', blogs.list);//route blog list
app.get('/blogs/add', blogs.add);//goto form new blog
app.post('/blogs/add', blogs.save);//insert blog
app.get('/blogs/delete/:id', blogs.delete_blog);
app.get('/blogs/edit/:id', blogs.edit);//goto form edit blog
app.post('/blogs/edit/:id',blogs.save_edit);//edit blog route , get n post
app.use(app.router);
http.createServer(app).listen(8080, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
