import React, {Component} from 'react';
import "../assets/css/Login.css";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="form">
                    <input name="email" type="email" placeholder="Email" onChange={this.handleInputChange}/>
                    <input name="password" type="password" placeholder="Password" onChange={this.handleInputChange}/>
                    <button onClick={this.handleSubmit}>INGRESAR</button>
                    <p>{this.state.errorMessage}</p>
                </div>
            </div>
        )
    }

    handleInputChange(event) {
        const input = event.target;
        this.setState({[input.name]: input.value});
    }

    handleApiResponse(response) {
        if (response.error) {
            this.setState({errorMessage: response.error})
        } else {
            /*
            Es un espacio de memoria en el navegador que podemos usar para almacenar cosas (texto).
            La diferencia con SessionStorage es que los datos no tienen expiración y son visibles en todas las tabs.
            */
            localStorage.setItem("token", response.token);
            this.props.history.push("/home");
        }
    }

    handleSubmit() {
        const requestConfig = {
            method: 'POST',
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
            // Para indicarle al server que tipo de dato estamos enviando
            headers: {'Content-Type': 'application/json'}
        };

        fetch("https://reqres.in/api/login", requestConfig).then(response => response.json()).then(this.handleApiResponse);
    }
}
