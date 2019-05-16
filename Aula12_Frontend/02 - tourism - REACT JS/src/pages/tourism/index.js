import React, { Component } from 'react';
import api from '../../services/api';

export default class Tourism extends Component {
  
        state = {
            tourism: {},
    };

    

    async componentDidMount () {
        const { id } = this.props.match.params;

        const response = await api.get(`/tourism/${id}`);

        this.setState({ tourism: response.data });
    }
    

    render() {
        const { tourism } = this.state;
        return (
            <div className="tourism-info">
                <h1> {tourism.title} </h1>
                <h1> {tourism.description} </h1>
                <h1> {tourism.totalVacancy} </h1>
                <h1> {tourism.date} </h1>
                <br/>
            </div>
        );
    }
}