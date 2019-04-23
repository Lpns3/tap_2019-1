const Invoice = require('../models/invoice.js');

const status = require('http-status');

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

    Invoice.create({
        name: name,
        value: value,
        date: date
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

    Invoice.findByPk(id)
        .then(invoice => {
            if (invoice) {
                Invoice.update({
                    name: name,
                    value: value,
                    date: date
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