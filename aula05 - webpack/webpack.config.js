//primeiro passo
//configura o package.json para o webpack gerenciar o app
//instala o webpack
//yarn add webpack webpack-cli -D

module.exports = {
    //esse é o arquivo principal onde está o código
    entry: './main.js',
    output: {
        //esse é o caminho e o arquivo transformado pelo babel
        //e que é lido pelo navegador
        path: __dirname,
        filename: 'bundle.js',
    },

    module: {
        rules: [{
            //pega todos arquivos com extensao js no app para o babel
            test: /\.js$/,
            //exclui os arquivo que estao na pasta node_modules
            exclude: /node_modules/,
            use: {
                //nao tem instalado o babel loader
                //yarn add babel-loader@8.0.0-beta.0 -D
                loader: 'babel-loader',
            }
        }],
    },
};