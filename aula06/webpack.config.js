module.exports = {
    //basicamente vai falar qual é o nosso arquivo principal
    entry: ['@babel/polyfill', './src/main.js'],
    //para qual lugar e arquivo devo enviar para antes do es6
    output: {
        //variavel global que se refere ao diretorio do webpack
        path: __dirname + '/public',
        //nome do arquivo responsavel no babel
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    //
    module: {
        //vai dizer como o webpack deve se comportar quando o usuario quiser importar novos arquivos js
        rules: [
            {
            //vai dizer baseado na extensao do arquivo, qual loader vai usar (ex: Babel)
            test: /\.js$/,
            //excluir isso pq nao quero que o babel execute nenhum arquivo js da pasta, somente do projeto
            exclude: /node_modules/,
            use: {
                //precisamos instalar ele
                //yarn add babel-loader -D
                //yarn add babel-loader@8.0.0-beta.0 -D
                loader: 'babel-loader',
                }
            }
        ],
    },
};