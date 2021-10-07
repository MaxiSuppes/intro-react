import React, {useEffect, useState} from "react";
import {app} from "../app/app";

export const ProfileWithHooks = () => {
    // useState devuelve dos cosas: el valor del estado actual y una función que permite actualizar dicho valor.
    // Recibe como argumento el valor inicial que se va a usar para el primer renderizado.
    const [userData, setUserData] = useState({});


    // useEffect unifica el comportamiento de componentDidMount, componentDidUpdate y componentWillUnmount.
    // Son operaciones que se ejecutan despues de aplicar los cambios en el DOM.
    // Pueden devolver una función que indica como limpiar estos efectos. Ej: Suscribirse a un evento y desuscribirse al terminar.
    // Como segundo argumento puede enviarse una lista de props que desencadenan el re-renderizado. Si no se manda nada,
    // se hace solo la primera vez.
    useEffect(() => {
        const handleApiResponse = (response) => {
            setUserData(response.userPersonalData());
        }

        const getUserData = () => {
            app.apiClient().getProfile(handleApiResponse);
        };

        getUserData();
    }, []);

    return (
        <div>
            <h2>Perfil del usuario</h2>
            <p>Email: {userData.email}</p>
            <p>Nombre: {userData.firstName}</p>
            <p>Apellido: {userData.lastName}</p>
        </div>
    )
}