//preciso exportar as informacoes para ficarem publicas para outros arquivos
module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'tourism',
            dialect: 'mysql',
            user: 'root',
            password: 'root'
        }
    },
    production: {
        database: {
            //variaveis de ambiente que vao ser lidas pela aplicacao
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}

//agora temos que instalar o sequelize que é um ORM
//ele vai gerenciar as transacoes com o banco de dados
//nesse caso vamos usar o mysql
//npm i mysql2 sequelize --save