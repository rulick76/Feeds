var express = require('express');
var router = express.Router();
var client = require("../db");

/* GET players listing. */
router.get('/', function(req, res, next) {
    const collection = client.db("seemo").collection("feeds");
    collection.find({}).toArray(function(err, result) {
      if (err) throw err;
        res.json(result);
    });
  })

router.post('/', function(request, response){
  const collection = client.db("seemo").collection("feeds");
  collection.insert({ name:request.body.name, feed : request.body.feed });
});
  
module.exports = router;




