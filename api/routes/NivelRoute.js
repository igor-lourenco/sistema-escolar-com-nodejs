const {Router} = require('express');
const NivelController = require('../../controllers/NivelController.js');

const router = Router();

router.get('/niveis', NivelController.findAll);
router.get('/niveis/:id', NivelController.findById);
router.post('/niveis', NivelController.insert);
router.put('/niveis/:id', NivelController.update);
router.delete('/niveis/:id', NivelController.deleteById);

module.exports  = router;