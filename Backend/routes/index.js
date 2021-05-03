var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const roleController = require('../controllers').role;
router.get('/api/role',roleController.list);
router.get('/api/role/:id',roleController.getById);
router.post('/api/role',roleController.add);
router.put('/api/role/:id', roleController.update);
router.delete('/api/role/:id', roleController.delete);

module.exports = router;
