import React, {Component} from 'react';


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

    /* fetch devuelve una Promise, que en caso de que se resuelva correctamente el resultado va a ser un objeto Response */
    /* fetch falla (lo atrapamos con el catch en lugar de con el then) solo si no se pudo completar la request o si hubo una falla en la red. No ante 400 o 500 */

    getUserData() {
        fetch("https://reqres.in/api/users/2").then(response => response.json()).then(this.handleApiResponse);
    }


    /* Usar async await es básicamente sintax sugar. Hace parecer que los pedidos son sincrónicos. La ejecución de
    "pausa" en la línea del await pero sin bloquear el hilo principal. Se reanuda cuando la promesa fue resuelta.
    Es más simple de entender cuando tengo muchas llamadas asincrónicas dependientes una de otras. */

    /*async getUserData() {
        const response = await fetch("https://reqres.in/api/users/2");
        const jsonResponse = await response.json();
        this.handleApiResponse(jsonResponse);
    }*/
}
