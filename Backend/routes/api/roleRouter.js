const router = require('express').Router();
const roleController = require('../../controllers').role;

router.get('/',roleController.list);
router.get('/:id',roleController.getById);
router.post('/',roleController.add);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);

module.exports = router;
