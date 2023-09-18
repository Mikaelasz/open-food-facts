import express from 'express'
import ProdutosController from '../controllers/produtosController.js';


const routes = express.Router();

routes.get('/products', ProdutosController.listarProdutos)
routes.get('/products/:code', ProdutosController.listarProdutosPorId)
routes.post('/products', ProdutosController.cadastrarProduto)
routes.put('/products/:code', ProdutosController.atualizarProduto)
routes.delete('/products/:code', ProdutosController.excluirProduto)


export default routes;