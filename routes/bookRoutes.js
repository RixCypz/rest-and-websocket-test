const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/addBook",bookController.addBook);
router.get("/findBooks",bookController.findBooks);
router.delete("/deleteBook",bookController.deleteBooks);
router.put("/updateBook",bookController.updateBook);

module.exports = router;