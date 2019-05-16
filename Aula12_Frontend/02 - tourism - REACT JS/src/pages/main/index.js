import React, { Component } from 'react';
//import api from '../../services/api';
import "./style.css";
import { Link } from 'react-router-dom';

export default class Tourism extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tourism: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3005/app/tourism`)
            .then(tourism =>
                tourism.json().then(tourism => this.setState({ tourism }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { tourism } = this.state;
        return tourism.map((tourism, index) => (
            <div className="employees-list">
             <article key={tourism.id}>
             <strong> {tourism.title}</strong>
             <p> {tourism.description} </p>
             <p> {tourism.totalVacancy} </p>
             <p> {tourism.date} </p>
                <br/>
                <Link to={`/tourism/${tourism.id}`}> Acessar </Link>
                </article>
            </div>
        ))
    };
}