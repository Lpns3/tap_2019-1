import React, { Component } from 'react';
import api from '../../services/api';
import "./style.css";
import { Link } from 'react-router-dom';

export default class Main extends Component {
    //nao armazeno a variavel de forma local
    //uso uma variavel estado para isso
    //cria um objeto e facilita a forma de manipular ele e atualizar
    state = {
        employees: [],
        employessInfo: {},
        page: 1,
    };

    //mostrar info automaticamente qdo iniciar a app, usa esse metodo
    componentDidMount(){
        this.loadTourism();   
    }
    
    loadTourism = async (page = 1) => {
        //const response = await api.get('/employees');

        const response = await api.get(`/employees?page=${page}`);

        const { docs, ...employessInfo } = response.data;

        //console.log(response.data.docs);
        //this.setState ({ employees: response.data.docs})

        this.setState ({ employees: docs, employessInfo, page});
    };

    prevPage = () => {
        const { page, employessInfo } = this.state;
        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadTourism(pageNumber);
    }

    nextPage = () => {
        const { page, employessInfo } = this.state;
        if(page === employessInfo.pages) return;

        const pageNumber = page + 1;
        this.loadTourism(pageNumber);
    }
    
    render() {
        const { employees, page, employessInfo } = this.state;
        ///return <h1> Count: {this.state.employees.length} </h1>
        /*return (
            <div className="employees-list">
                {this.state.employees.map(employee => (
                    <h2 key={employee._id}> {employee.position} </h2>
                ))}
            </div>
        )*/

        return (
            <div className="employees-list">
                {this.state.employees.map(employee => (
                    <article key={employee._id}>
                        <strong> {employee.name} </strong> 
                        <p> {employee.position} </p>

                        <Link to={`/employee/${employee._id}`}> Acessar </Link>
                        
                    </article>
                ))}

                <div className="actions"> 
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===employessInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}
