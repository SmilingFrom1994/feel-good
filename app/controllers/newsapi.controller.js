const axios = require('axios');
const db = require("../models");
const Contents = db.content;
const Op = db.Sequelize.Op;
var top_headlines = 'http://newsapi.org/v2/top-headlines/';
var api_key='0651db9c823c4a5992fe58e6bbe1b988';

var content_check = new Object();
var final_contents =[{}];

exports.headlines= (req,res)=>{

    axios.get(top_headlines, {
  params: {
    q:req.body.condition,
    apiKey:api_key
  }
}).then(response => {
  const articles=response.data.articles;
    articles.forEach(obj => {

  Object.entries(obj).forEach(([key, value]) => {
       content_check.content=obj.content,
       content_check.title=obj.title,
       content_check.categories_id=1,
       content_check.description=obj.description,
       content_check.is_approved="NO",
       content_check.picture_location=null,
       content_check.picture_url=obj.urlToImage,
       content_check.source_url=obj.url


    });
    final_contents.push(content_check);
    // console.log(final_contents);
    console.log("-------------------------------------------------------------------------------------------------");

  // console.log(final_contents);
   content_check=new Object();

});

        res.send(response.data.articles);
        createNews(final_contents);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });

};
 function createNews(final_contents)
 {
   console.log("IN HERE");
   // console.log(final_contents);
   final_contents.forEach(obj => {
   if(obj.title != null)
   {
     // console.log("INSIDE");
     Contents.create(obj);
   }
 });
};
