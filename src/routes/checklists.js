const express =  require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Olá');
    res.send(); 
    // responde com o que foi enviado
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
    // responde com o status 200 e o json do body
})

router.get('/:id', (req, res) => {
    // dois pontos indica que um parametro 'id' esta sendo esperado

    console.log(req.params.id);
    // automaticamente o express pega o que vem em :id e
    // preenche o objeto colocando em id
    
    res.send(`ID: ${req.params.id}`);
    // responde com o id
});

module.exports = router;