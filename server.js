/**
 * Created by py on 2016/5/18.
 */
var express = require("express");
var bodyParser =  require("body-parser");
var fs = require("fs");
var app = express();
var path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var COMMENTS_FILE = path.join(__dirname, './src/data.json');
app.get("/api/comments",function (req,res) {
    console.log("xxxxxxxxxxx",COMMENTS_FILE)
    fs.readFile(COMMENTS_FILE,function (err,data){
        if (err){
            console.log(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    })
});

app.post("/api/comments",function (req,res){
    fs.readFile(COMMENTS_FILE,function (err,data){
        if(err) {
            console.log(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        var newComment = {
            author:req.body.author,
            text : req.body.text
        };
        comments.push(newComment);
        fs.writeFile(COMMENTS_FILE,JSON.stringify(comments,null,4),function (err){
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        })
    });
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});