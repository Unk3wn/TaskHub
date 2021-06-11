const  router = require('express').Router();
const taskController = require('../../controllers').task;

router.get('/',taskController.list);
router.get('/:id',taskController.getById);
router.post('/',taskController.add);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

module.exports = router;
