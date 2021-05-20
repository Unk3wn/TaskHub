const  router = require('express').Router();
const solutionsController = require('../controllers').solution;

router.get('/',solutionsController.list);
router.get('/:id',solutionsController.getById);
router.post('/',solutionsController.add);
router.put('/:id', solutionsController.update);
router.delete('/:id', solutionsController.delete);

module.exports = router;
