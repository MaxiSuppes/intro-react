import React, {Component} from "react";

export class Pepe extends Component {
    render() {
        console.log("renderizando");
        return (
            <p>Nombre de pepe: {this.props.nombre}</p>
        )
    }
}