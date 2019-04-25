const mongoose = require('mongoose');
const Invoice = mongoose.model('Invoice');

module.exports = {
    async index (req, res){
        const {page} = req.query;
        const invoices = await Invoice.paginate({}, {page, limit: 10});
        return res.json(invoices);
    },

    async details (req, res) {
        const invoices = await Invoice.findById(req.params.id);
        return res.json(invoices);
    },

    async insert (req, res) {
        const invoices = await Invoice.create(req.body);
        return res.json(invoices);
    },

    async update (req, res) {
        const invoices = await Invoice.findByIdAndUpdate(
            req.params.id, req.body, {new: true});
        return res.json(invoices);
    },
    
    async delete (req, res) {
        await Invoice.findByIdAndRemove(req.params.id);
        return res.send();
    }
};