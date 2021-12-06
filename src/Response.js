import React from 'react';
import './App.css';

function Response() {
        const queryString = window.location.href;
        //alert(queryString);
        const myArray = queryString.split("response#");
        //alert(myArray[1]);
        const urlParams = new URLSearchParams(myArray[1]);
        const id_token = urlParams.get('id_token');
        //alert(id_token);
        const token_type = urlParams.get('token_type');
        //alert(token_type);
        const access_token = urlParams.get('access_token');
        //alert(access_token);
        const refresh_token = urlParams.get('refresh_token');
        //alert(refresh_token);
        var setsession = window.sessionStorage.setItem("id_token", id_token);
        var setsession = window.sessionStorage.setItem("refresh_token", refresh_token);
        var setsession = window.sessionStorage.setItem("access_token", access_token);
        window.location.replace("https://dev.d270qwykq8bhla.amplifyapp.com/");

}

export default Response;
