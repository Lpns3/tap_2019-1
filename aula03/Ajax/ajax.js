//para termos acesso aos recursos da ajax
var ajax = new XMLHttpRequest();
//isso aqui vai la na api do git hub
//e inicia uma requisicao com ela
//esses dados sao buscados usando GET
ajax.open('GET', 'https://api.github.com/users/nunesfb');
//nao enviamos nada, somente recuperamos dados de la
ajax.send(null);

//quando a requisicao estiver pronta
ajax.onreadystatechange = function () {
    //sei que esta pronta quando o retorno for igual a 4
    if(ajax.readyState === 4){
        //como os dados vem no formato JSON
        //tenho que usar o parse para poder ver os dados
        console.log(JSON.parse(ajax.responseText));
    }
}