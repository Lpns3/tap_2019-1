"use strict";

//exemplo 01

/*
//crio uma classe
class List {
    //crio o construtor da classe 
    //inicio um vetor chamado value vazio
    constructor(){
        this.value = [];
    }
    //crio um metodo de adicionar com um parametro
    //adiciono o valor deste parametro na lista value
    add(data){
        this.value.push(data);
        console.log(this.value);
    }
}
//aqui criamos uma extensao da lista chamada OtherList
class OtherList extends List {

}
//armazenando a minha classe em uma constante MyList
const MyList = new OtherList();

//buscando pelo ID o botao
//quando esse botao for clicado, executo uma funcao
//que chama uma outra funcao da classe MyList 
//e adiciona um novo elemento na lista
document.getElementById('add').onclick = function(){
    MyList.add('New element');
}
*/
//Exemplo 02

/*
//crio uma classe
class List {
    //crio o construtor da classe 
    //inicio um vetor chamado value vazio
    constructor(){
        this.value = [];
    }
    //crio um metodo de adicionar com um parametro
    //adiciono o valor deste parametro na lista value
    add(data){
        this.value.push(data);
        console.log(this.value);
    }
}
//aqui criamos uma extensao da lista chamada OtherList
class OtherList extends List {
    constructor(){
    //vamos chamar o construtor da classe pai
        super();
        //to dizendo que o nome do usuario no inicio é Felipe
        this.user = "Felipe";
    }
    showUser(){
        console.log(this.user);
    }
}
//armazenando a minha classe em uma constante MyList
const MyList = new OtherList();

//buscando pelo ID o botao
//quando esse botao for clicado, executo uma funcao
//que chama uma outra funcao da classe MyList 
//e adiciona um novo elemento na lista
document.getElementById('add').onclick = function(){
    MyList.add('New element');
}

MyList.showUser();

*/
//Exemplo 03

/*
class List {
    constructor(){
        this.myList = [];
    }
    //isso é uma funcao estatica
    //só para passar valores e retornar algo
    static sum(a, b){
        return a + b;
    }
}

console.log(List.sum(2,5));
*/
//Exemplo 04

/*
//mutacao
//trabalha com o mesmo formato e informacoes do objeto
//mas altera os valores dentro dele
const user = {name: 'Felipe'};
user.name = 'Nunes';
console.log(user);
*/
//Exemplo 05
function golDoGremio(x) {
  //trabalha com o escopo
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

golDoGremio(7);
