////////////////MÓDULOS ///////////////////// 
const express = require("express");
const router = express.Router();
//////CONTROLLERS 
const funcionarioController = require("../controller/funcionarioController");

const livroController = require("../controller/livroController");
////////////////Requisições HTTP Principal ///////////////////// 
router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Livraria" });
})
////////////////Requisições HTTP funcionario ///////////////////// 
//POST - CADASTRAR 
router.post("/add_funcionario", funcionarioController.FuncionarioCreate);
//GET - LISTAR 
//router.get("/funcionarios/:id?", funcionarioController.FuncionarioListar);
//GET - LISTAR 
router.get("/funcionarios/:id?", funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);
//PUT - UPDATE 
router.put("/funcionarios/:id", funcionarioController.FuncionarioUpdate);
// DELETE 
router.delete("/funcionarios/:id", funcionarioController.FuncionarioDelete);

router.post("/login", funcionarioController.FuncionarioVerificaLogin);

//POST - CADASTRAR 
router.post("/add_livros", livroController.livroCreate);

//router.post("/livros/Cadastrar", livroController.livroCreate);

//GET - LISTAR
router.get("/livros/:id?", livroController.LivroListar);

module.exports = router;

