const {Router} = require('express');
const PessoaController = require('../../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.findAll);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.insert);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.deleteById);

router.get('/pessoas/:estudanteId/matriculas', PessoaController.findAllMatriculasByPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findByIdMatriculas);

module.exports  = router;