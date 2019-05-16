import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Employee extends Component {
    state = {
        employee: {},
    };

    async componentDidMount () {
        const { id } = this.props.match.params;

        const response = await api.get(`/employees/${id}`);

        this.setState({ employee: response.data });
    }
    
    render() {
        const { employee } = this.state;
        return (
            <div className= "employee-info">
                <h1> {employee.name} </h1>
                <h1> {employee.position} </h1>
                <h1> {employee.salary} </h1>

                <p><Link to={`/`}> Voltar </Link></p>
            </div>
        );
    }
}