const  router = require('express').Router();
const klassController = require('../../controllers').klass;

router.get('/',klassController.list);
router.get('/:id',klassController.getById);
router.post('/',klassController.add);
router.put('/:id', klassController.update);
router.delete('/:id', klassController.delete);

module.exports = router;
