import produtos from '../models/Produtos.js'


class ProdutosController{

    static async listarProdutos(req, res) {
        try{
            const listaProdutos = await produtos.find({})
            res.status(200).json(listaProdutos)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }        
    }

    static async listarProdutosPorId(req, res) {
        try{
            const id = req.params.id;
            const produtoEncontrado = await produtos.findById(id)
            res.status(200).json(produtoEncontrado)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição de listar produtos por ID`})
        }        
    }

    static async cadastrarProduto(req, res){
       // const novoProduto = await produtos.create(req.body)        
        try{                
            const novoProduto = await produtos.create(req.body)          
            res.status(201).json({ message: "Produto criado com sucesso", produtos: novoProduto})
        } catch (erro){
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar produto`})
        }
    }

    static async atualizarProduto(req, res) {        
        try{
            const id = req.params.code;
            await produtos.updateOne({}, req.body)
            res.status(200).json({message: 'Produto atualizado'})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar produto`})
        }        
    }

    static async excluirProduto(req, res) {
        try{
            const id = req.params.code;
            await produtos.deleteOne({}, req.body)
            res.status(200).json({message: 'Produto excluido com sucesso'})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na exclusão do produto`})
        }        
    }
}


export default ProdutosController