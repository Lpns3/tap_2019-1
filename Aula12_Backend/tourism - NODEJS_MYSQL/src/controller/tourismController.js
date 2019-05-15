const Tourism = require('../models/tourism.js');

//importa o modulo http
const status = require('http-status');

//http://docs.sequelizejs.com/manual/models-usage.html

//exports faz a exportacao de um objeto 
//estamos declarando o SearchOne como um metodo diretamente nesse objeto
//vai buscar uma informacao
//ele vai receber um middleware, assim como no main 
exports.SearchOne = (req, res, next) => {
    //tenho que ir buscar o id do registro que vai ser buscado no bd
    const id = req.params.id;

    //agora é possível realizar a pesquisa
    //esses metodos sao disponibilizados pelo sequelize
    //isso gera uma promise (comunicacao assincronos)
    Tourism.findByPk(id)
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(tourism => {
            if (tourism) {
                res.status(status.OK).send(tourism);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};


//metodo para buscar todos os dados e paginar eles
exports.SearchAll = (req, res, next) => {
    //pego os parametros que vem da url, transforma para inteiro
    //se nao tiver, retorna 0
    let limit = parseInt(req.query.limit || 0);
    let page = parseInt(req.query.page || 0);

    //verificar se o limite e a pagina realmente estao como inteiros, senao retorna erro
    if (!Number.isInteger(limit) || !Number.isInteger(page)) {
        res.status(status.NOT_FOUND).send();
    }

    //constante que informa o numero de itens maximo na pagina
    const itensPage = 10;

    //verifica o limite da pagina calculando
    //itens minimos e maximos por pagina
    limit = limit > itensPage || limit <= 0 ? itensPage : limit;
    page = page <= 0 ? 0 : page * limit;

    //faz a busca de todos os dados
    //passa o objeto limit contendo o limite e a pagina que esta (sequencia de dados a ser pego por pagina)
    Tourism.findAll({ limit: limit, offset: page })
        //se tudo ocorrer bem, faz o envio da resposta
        .then(tourism => {
            if (tourism) {
                res.status(status.OK).send(tourism);
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const title = req.body.title;
    const description = req.body.description;
    const totalVacancy = req.body.totalVacancy;
    const date = req.body.date;

    //aqui passa os parametros com dados para os atributos do model
    Tourism.create({
        title: title,
        description: description,
        totalVacancy: totalVacancy,
        date: date
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(tourism => {
            if (tourism) {
                res.status(status.OK).send(tourism);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};


//atualizar os dados
exports.Update = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const totalVacancy = req.body.totalVacancy;
    const date = req.body.date;

    Tourism.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(tourism => {
            if (tourism) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                Tourism.update({
                    title: title,
                    description: description,
                    totalVacancy: totalVacancy,
                    date: date
                },
                    //recebe um parametro id na clausula where
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        //status 200 é o padrao
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                //caso nao existir, retorna erro
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};


//deletar os dados
exports.Delete = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    const id = req.params.id;
   
    Tourism.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(tourism => {
            if (tourism) {
                //se existir, vai deletar o registro
                Tourism.destroy({                   
                    //recebe um parametro id na clausula where
                        where: { id: id }
                    })
                    .then(() => {
                        //status 200 é o padrao
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                //caso nao existir, retorna erro
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};