//localiza o elemento com id igual a box
//entra no box e localiza o elemento ul
//e guarda na variavel list
var list = document.querySelector('#box ul');
var text = document.querySelector('#box input');
var button = document.querySelector('#box button');

//criar uma funcao que pega o texto escrito pelo usuario
//e armazena em uma variavel
//adiciona esse texto da variavel ao final da lista

//inicializa nossa lista de elementos (lista que vai guardar os itens)
listElements = [];

//funcao para criar a lista no html
function renderList() {

    //inicialmente, esvazia a lista a cada nova atualizacao
    list.innerHTML = '';

    //varre cada elemento da lista
    //a lista inicia vazia, depois vai sendo adicionado itens nela
    for (value of listElements) {
        //cria um item na lista
        var item = document.createElement('li');
        //pego o item e adiciono um texto nele
        var textItem = document.createTextNode(value);

        //remover elementos da lista
        var linkElement = document.createElement('a');

        //vamos saber qual posicao esta o texto clicado pelo usuario para ser excluido
        //funcao indexof pesquisa a posicao do texto
        var pos = listElements.indexOf(value);
        //chama a funcao de quando clicar no botao
        //passa a funcao de deletar e passa a posicao por meio de concatenacao
        linkElement.setAttribute('onclick', 'removeTask (' + pos + ')');

        var linkText = document.createTextNode(' Remove');
        //coloca o texto como filho do link
        linkElement.appendChild(linkText);

        //é obrigatorio ter o href para virar link
        linkElement.setAttribute('href', '#');

        //adiciona o texto junto ao item
        item.appendChild(textItem);

        //adiciona o link junto ao texto
        item.appendChild(linkElement);

        //adiciona o iten na lista (ul)
        list.appendChild(item);
    }
}
renderList();

function addItem() {
    //pega o texto escrito pelo usuario
    // e armazena na variavel textItem
    var textItemInput = text.value;
    //pego a lista e adiciona o texto ao final dela
    //usando a funcao chamada push
    listElements.push(textItemInput);
    //vou deletar o texto do input
    text.value = "";
    renderList();
}

button.onclick = addItem;

//funcao para excluir o elemento da lista
//vamos usar a posicao do array para saber onde ele clicou e deletar o elemento
function removeTask(pos){
    //para remover com posicao, usa o splice, ele remove uma quantidade de itens do array, baseado na posicao que passar
    //estamos dizendo que a partir da posicao q receber como parametro, remova o proximo item (item exato naquela posicao)
    //se for na posicao 0, vai remover somente esse item 
    listElements.splice(pos, 1);

    //renderiza depois de deletar
    renderList();
}
