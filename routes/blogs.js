/*
 * GET blogs listing.
 */

//list = select All
exports.list = function(req, res){
  req.getConnection(function(err,connection){

     connection.query('SELECT * FROM blogs',function(err,rows)     {

        if(err)
           console.log("Error Selecting : %s ",err );

            res.render('showlist',{page_title:"All blogs",data:rows});

         });

    });

};

exports.add = function(req, res){
  res.render('showform',{page_title:"Add blogs",url:'/blogs/add'});
};

exports.edit = function(req, res){

  var id = req.params.id;

  req.getConnection(function(err,connection){

     connection.query('SELECT * FROM blogs WHERE id = ?',[id],function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('showform',{page_title:"Edit blogs",url:'/blogs/edit',data:rows});

         });

    });
};

/*Add blog = Create & Insert the blog*/
exports.save = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function (err, connection) {

        var data = {
          topic    : input.topic,
          content : input.content
        };

        var query = connection.query("INSERT INTO blogs set ? ",data, function(err, rows)
        {

          if (err)
              console.log("Error inserting : %s ",err );

          res.redirect('/blogs');

        });

       // console.log(query.sql); get raw query

    });
};

/*Edit = Edit & Update edited blog*/
exports.save_edit = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var data = {
            topic    : input.topic,
            content : input.content
        };

        connection.query("UPDATE blogs set ? WHERE id = ? ",[data,id], function(err, rows)
        {

          if (err)
              console.log("Error Updating : %s ",err );

          res.redirect('/blogs');

        });

    });
};

exports.delete_blog = function(req,res){

     var id = req.params.id;

     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM blogs  WHERE id = ? ",[id], function(err, rows)
        {

             if(err)
                 console.log("Error deleting : %s ",err );

             res.redirect('/blogs');

        });

     });
};
