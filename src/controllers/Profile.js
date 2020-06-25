import React, {Component} from 'react';
import {app} from "app/app";
import {Pepe} from "../components/Pepe";


export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        };

        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        return (
            <div>
                <h2>Perfil del usuario</h2>
                <p>Email: {this.state.userData.email}</p>
                <p>Nombre: {this.state.userData.firstName}</p>
                <p>Apellido: {this.state.userData.lastName}</p>
                <Pepe key="pepe" nombre="pepe"/>
            </div>
        )
    }

    handleApiResponse(response) {
        this.setState({userData: response.userPersonalData()})
    }

    getUserData() {
        app.apiClient().getProfile(this.handleApiResponse);
    }
}
