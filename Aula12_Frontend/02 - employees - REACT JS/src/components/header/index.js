import React from 'react';

//header é um component
//cria uma pasta somente para ele pq vai ficar todos arquivos dele em um lugar só

//para importar o css, venho direto aqui tbm
import './style.css';

//stateless components - criamos componentes por meio de variaveis
//pode tirar os parenteses se desejar
const Header = () => (
    <header id="main-header">Tourism App</header>
);

export default Header;

/*
//seria a mesma coisa que fazer isso
//temos que usar assim quando trabalharmos com estados
class Header extends Component {
    render () {
        return <h1>Hello</h1>
    }
}
*/