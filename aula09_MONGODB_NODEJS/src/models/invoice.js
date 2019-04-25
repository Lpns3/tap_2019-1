const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const InvoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
        default: 0,
    },
    adress: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
InvoiceSchema.plugin(mongoosePaginate);
mongoose.model('Invoice', InvoiceSchema);