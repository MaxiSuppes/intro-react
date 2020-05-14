import React, {Component} from 'react';
import {getSetting} from "../settings";


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
                <p>Email: {this.state.userData['first_name']}</p>
                <p>Nombre: {this.state.userData['last_name']}</p>
                <p>Apellido: {this.state.userData['email']}</p>
            </div>
        )
    }

    handleApiResponse(userJson) {
        this.setState({userData: userJson.data})
    }

    getUserData() {
        const url = getSetting('API_URL') + "/users/2";
        fetch(url).then(response => response.json()).then(this.handleApiResponse);
    }
}
