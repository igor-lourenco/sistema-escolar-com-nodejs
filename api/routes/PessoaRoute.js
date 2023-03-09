const {Router} = require('express');
const PessoaController = require('../../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.findAll);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.insert);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.deleteById);

module.exports  = router;