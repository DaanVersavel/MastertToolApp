import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {Button, View} from "react-native";
import {TYPES} from "react-native-basic-form";

var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
    'email': 'lotte@gmail.com',
    'password': 'lotte123'
});
var config = {
    method: 'post',
    url: 'http://localhost:8080/login',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });



const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const fields = [
        // {name: 'image', label: 'Profile Image', required: true, type: TYPES.Image},
        {name: 'email', label: 'Email Address', required: true, type: TYPES.Email},
        {name: 'password', label: 'Password', required: true, secure: true},
    ];

    return (
        <>
            <View>
                <Form
                    title={"Register"} //this is the button title
                    fields={fields}
                    // initialData={initialData} //used in edit mode
                    // onSubmit={onSubmit}
                    // loading={loading}
                    style={{}}/>
            </View>

        </>

    );
}

export default Login;