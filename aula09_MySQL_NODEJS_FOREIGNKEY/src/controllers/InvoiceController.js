const Invoice = require('../models/invoice.js');

const status = require('http-status');

exports.SearchAll = (req, res, next) => {

    Invoice.findAll()
        //se tudo ocorrer bem, faz o envio da resposta
        .then(invoice => {
            if (invoice) {
                res.status(status.OK).send(invoice);
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
    const personId = req.body.personId;

    //aqui passa os parametros com dados para os atributos do model
    Invoice.create({
        title: title,
        description: description,
        totalVacancy: totalVacancy,
        date: date,
        personId: personId
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(invoice => {
            if (invoice) {
                res.status(status.OK).send(invoice);
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
    const personId = req.body.personId;

    Invoice.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(invoice => {
            if (invoice) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                invoice.update({
                    title: title,
                    description: description,
                    totalVacancy: totalVacancy,
                    date: date,
                    personId: personId
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

    Invoice.findByPk(id)
        .then(invoice => {
            if (invoice) {
                res.status(status.OK).send(invoice);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Insert = (req, res, next) => {
    const name = req.body.name;
    const value = req.body.value;
    const date = req.body.date;
    const personId = req.body.personId;

    Invoice.create({
        name: name,
        value: value,
        date: date,
        personId: personId
    })
        .then(invoice => {
            if (invoice) {
                res.status(status.OK).send(invoice);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const name = req.body.name;
    const value = req.body.value;
    const date = req.body.date;
    const id = req.params.id;
    const personId = req.body.personId;

    Invoice.findByPk(id)
        .then(invoice => {
            if (invoice) {
                Invoice.update({
                    name: name,
                    value: value,
                    date: date,
                    personId: personId
                },
                    {
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


exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Invoice.findByPk(id)
        .then(invoice => {
            if (invoice) {
                Invoice.destroy({
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