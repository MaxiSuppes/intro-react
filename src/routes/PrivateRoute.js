import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {app} from "../app/app";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
               render={props => app.thereIsLoggedInUser() ?
                   <Component {...props}/> :
                   <Redirect to={{pathname: app.routes().login}}/>
               }
        />
    );
};