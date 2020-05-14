import React, {Component} from 'react';
import {app} from "../app/app";
import "../assets/css/Login.css";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: ''
            },
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
                    <p className="formError">{this.state.errorMessage}</p>
                </div>
            </div>
        )
    }

    handleInputChange(event) {
        const input = event.target;
        let formData = this.state.formData;
        formData[input.name] = input.value;
        this.setState({formData: formData});
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessages()});
        } else {
            app.loginUser(response.content().token);
            this.props.history.push(app.routes().home);
        }
    }

    handleSubmit() {
        app.apiClient().login(this.state.formData, this.handleApiResponse);
    }
}
