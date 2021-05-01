import React, { Component } from 'react';


export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };

        fetch('Home/GetPlytas')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>tytul</th>
                        <th>autor</th>
                        <th>gatunek</th>

                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id_plyta}>
                            <td>{forecast.id_plyta}</td>
                            <td>{forecast.tytul}</td>
                            <td>{forecast.autor}</td>
                            <td>{forecast.gatunek}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>

                {contents}
            </div>
        );
    }
}