const  router = require('express').Router();

const subjectController = require('../../controllers').subject;
router.get('/',subjectController.list);
router.get('/:id',subjectController.getById);
router.post('/',subjectController.add);
router.put('/:id', subjectController.update);
router.delete('/:id', subjectController.delete);

module.exports = router;
