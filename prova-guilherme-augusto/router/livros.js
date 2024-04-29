const express = require('express')
const router = express.Router()

listaLivros = [] 

router.get('/livros', (req, res) => {
    res.json(listaLivros)
})

router.get('/livros/:id', (req, res) => {
    const id = req.params.id
    const livro = listaLivros.find(livro => livro.id == id)

    if(!livro){
        return res.status(404).json({
            mensagem: 'Livro não encontrado!'
        })
    }
    
    return res.json(livro)
})

router.post('/livros', (req, res) => {
    const body = req.body

    if(!body.titulo || !body.autor || !body.editora || !body.ano || !body.preco){
        return res.status(400).json({
            mensagem: 'Preencha todos os campos para cadastro!'
        })
    }

    const livroNovo = {
        id: Math.round(Math.random() * 1000),
        titulo: body.titulo,
        autor: body.autor,
        editora: body.editora,
        ano: body.ano,
        preco: body.preco
    }

    listaLivros.push(livroNovo)

    return res.json({
        mensagem:'Livro cadastrado com sucesso!',
        livroNovo
    })
})

router.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    const index = listaLivros.findIndex(livro => livro.id == id)

    if(!body.titulo || !body.autor || !body.editora || !body.ano || !body.preco){
        return res.status(400).json({
            mensagem: 'Preencha todos os campos para cadastro!'
        })
    }

    if(index == -1){
        return res.status(404).json({
            mensagem: 'Livro não encontrado!'
        })
    }

    const livroAtualizado = {
        id: Number(id),
        titulo: body.titulo,
        autor: body.autor,
        editora: body.editora,
        ano: body.ano,
        preco: body.preco
    }

    listaLivros[index] = livroAtualizado

    return res.json({
        mensagem: 'Livro atualizado com sucesso',
        livroAtualizado
    })
})

router.delete('/livros/:id', (req, res) => {
    const id = req.params.id
    const index = listaLivros.findIndex(livro => livro.id == id)

    if(index == -1){
        return res.status(404).json({
            mensagem: 'Livro não encontrado!'
        })
    }

    listaLivros.splice(index, 1)

    return res.json({
        mensagem:'Livro deletado com sucesso!'
    })
})

router.get('/livros/autor/:autor', (req, res) => {
    const autor = req.params.autor
    const livroAutor = listaLivros.filter(livro => livro.autor.toLowerCase() == autor.toLowerCase())

    res.json(livroAutor)
})

router.get('/livros/preco/media', (req, res) => {
    let valorLivro = 0
    let valorMedia

    listaLivros.forEach(livro => {
        valorLivro = valorLivro + livro.preco
    });

    let quantidade = listaLivros.length

    valorMedia = valorLivro / quantidade

    res.json({
        mensagem: `O valor medio dos livros é de ${valorMedia}`
    })


})

module.exports = router