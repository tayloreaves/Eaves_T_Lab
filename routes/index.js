var express = require('express');
var router = express.Router();


const templateTypes = [
  { name: "The Avengers", description : "is based on Marvel's superheroes" },
  { name: "The Force Awakens", description : "is the seventh Star Wars film" },
  { name: "Stranger Things", description : "is a science fiction show starring a group of kids" }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Welcome to Taylors Video App!',
    // body: "Getting the hang of handlebars",
    // message: "Have a look at my video app!"
    templates: templateTypes
  });
});

// /*Get video page. */
// router.get('/', function(req, res, next) {
//   res.render('video', {
//     templates: templateTypes
//   });
// });



module.exports = router;
