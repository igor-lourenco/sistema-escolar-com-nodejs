const {Router} = require('express');
const PessoaController = require('../../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.findAll);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.insert);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.deleteById);

router.get('/pessoas/:estudanteId/matriculas', PessoaController.findAllMatriculasByPessoa);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.findByIdMatriculas);
router.post('/pessoas/:estudanteId/matriculas', PessoaController.insertMatricula);
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deleteByIdMatricula);

router.post('/pessoas/:id/restaurar', PessoaController.restorePessoa);

module.exports  = router;