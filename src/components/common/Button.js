import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "assets/css/Common.css";

export class Button extends Component {
    static defaultProps = {
        text: "Click acá"
    };

    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};