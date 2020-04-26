//Server configuration
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//Database configuration
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articlesSchema = new mongoose.Schema ({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articlesSchema);

//Express Routing "/articles"
app.route("/articles")
    //GET all the articles
    .get(function(req, res){
        Article.find(function(err, foundArticles){
            if(!err){
                res.send(foundArticles);
            } else{
                res.send(err);
            }
        });
    })

    //POST new article
    .post(function(req, res){
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function(err){
            if(!err){
                res.send("Successfully added a new artile");
            } else{
                res.send(err);
            }
        });
    })
    
    //DELETE all the articles
    .delete(function(req, res){
        Article.deleteMany(function(err){
            if(!err){
                res.send("Successfully deleted all articles.");
            } else{
                res.send(err);
            }
        });
    }
);

app.route("/articles/:articleTitle")
    //GET particular article
    .get(function(req, res){

        Article.findOne(
            {title: req.params.articleTitle}, 
            function(err, foundArticle){
                if(foundArticle){
                    res.send(foundArticle);
                } else{
                    res.send("No articles matching that title was found");
                }
        });
    })

    //PUT a specific article
    .put(function(req, res){
        Article.update(
            {title: req.params.articleTitle}, 
            {title: req.body.title, content: req.body.content},
            {overwrite: true},
            function(err){
                if(!err){
                res.send("Successfully update article.");
                } else{
                    res.send(err);
                }
            }
        );
    })

    //PATCH a specific article
    .patch(function(req, res){
        Article.update(
            {title: req.params.articleTitle}, 
            {$set: req.body},
            function(err){
                if(!err){
                    res.send("Successfully update article.");
                } else{
                    res.send(err);
                }
            }
        );
    })

    //DELETE a specific article
    .delete(function(req, res){
        Article.deleteOne(
            {title: req.params.articleTitle}, 
            function(err){
                if(!err){
                    res.send("Successfully deleted article.");
                } else{
                    res.send(err);
                }
        });
    }
);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});