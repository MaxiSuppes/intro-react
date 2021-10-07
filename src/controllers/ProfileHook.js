import React, {useEffect, useState} from "react";
import {Pepe} from "../components/Pepe";
import {app} from "../app/app";

export const ProfileHook = () => {
    const [userData, setUserData] = useState({});


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
            <Pepe key="pepe" nombre="pepe"/>
        </div>
    )
}