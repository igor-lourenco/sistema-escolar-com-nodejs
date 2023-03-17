const {Router} = require('express');
const TurmaController = require('../../controllers/TurmaController.js');

const router = Router();

router.get('/turmas', TurmaController.findAllFilterByData);
router.get('/turmas/:id', TurmaController.findById);
router.post('/turmas', TurmaController.insert);
router.put('/turmas/:id', TurmaController.update);
router.delete('/turmas/:id', TurmaController.deleteById);

module.exports  = router;