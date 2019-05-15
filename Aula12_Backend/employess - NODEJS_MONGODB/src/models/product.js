//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const EmployeeSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    //cada produto vai ter um titulo
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
        default: 0,
    },
    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
});

//adiciona o plugin para permitir paginacao
EmployeeSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('Employee', EmployeeSchema);