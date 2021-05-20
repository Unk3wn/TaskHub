const  router = require('express').Router();
const teamController = require('../../controllers').team;

router.get('/',teamController.list);
router.get('/:id',teamController.getById);
router.post('/',teamController.add);
router.put('/:id', teamController.update);
router.delete('/:id', teamController.delete);

module.exports = router;
