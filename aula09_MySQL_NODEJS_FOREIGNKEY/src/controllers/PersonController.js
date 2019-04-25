const Person = require('../models/person.js');

const status = require('http-status');


exports.SearchAll = (req, res, next) => {
    Person.findAll()
    .then(person => {
        if(person){
            res.status(status.OK).send(person);
        }
    })
    .catch(error => next(error));
}

//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const name = req.body.name;

    //aqui passa os parametros com dados para os atributos do model
    Person.create({
        name: name
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(person => {
            if (person) {
                res.status(status.OK).send(person);
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
    const name = req.body.name;

    Person.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(person => {
            if (person) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                person.update({
                    name: name
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


exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Person.findByPk(id)
        .then(person => {
            if (person) {
                res.status(status.OK).send(person);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Person.findByPk(id)
        .then(person => {
            if (person) {
                person.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};