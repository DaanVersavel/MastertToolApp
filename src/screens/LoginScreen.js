import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import qs, {stringify} from "qs";
import SecureStorage from 'react-native-secure-storage'


function LoginScreen ({navigation}) {

    const [email, setEmail] = useState('lotte@gmail.com');
    const [password, setPassword] = useState('lotte123');

    var data = qs.stringify({email, password});

    const handleSubmit = e => {
        e.preventDefault()
        console.log("email",email)
        console.log("password",password)
        console.log(data)
        var config = {
            method: 'post',
            // url: 'https://masterprooftoolbackend.herokuapp.com/login',
            url: 'http://localhost:8080/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then((response) => {
                console.log(response)
                SecureStorage.setItem('access_token', response.data['access_token'])
                sessionStorage.setItem('refresh_token', response.data['refresh_token'])
                // navigate(redirectPath, {replace: true})
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }
    // const handleChange = e => {
    //     const {id, value} = e.target;
    //     setlogininfo({...data, [id]: value});
    // }

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor:'#ffffff'}}>
            <View style={{paddingHorizontal: 25}}>
                {/*<View style={{alignItems: 'center'}}>*/}
                {/*    <LoginSVG*/}
                {/*        height={300}*/}
                {/*        width={300}*/}
                {/*        style={{transform: [{rotate: '-5deg'}]}}*/}
                {/*    />*/}
                {/*</View>*/}

                <Text
                    style={{
                        // fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Login
                </Text>

                <InputField
                    label={'Email'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    // value={email}
                    onChange={(val) => setEmail(val)}

                    keyboardType="email-address"
                />

                <InputField
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    // value={password}
                    onChange={(val) => setPassword(val)}
                    // fieldButtonFunction={() => {}}
                />

                <CustomButton label={"Login"} onPress={handleSubmit} />

                {/*<Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>*/}
                {/*    Or, login with ...*/}
                {/*</Text>*/}

                {/*<View*/}
                {/*    style={{*/}
                {/*        flexDirection: 'row',*/}
                {/*        justifyContent: 'space-between',*/}
                {/*        marginBottom: 30,*/}
                {/*    }}>*/}
                {/*    <TouchableOpacity*/}
                {/*        onPress={() => {}}*/}
                {/*        style={{*/}
                {/*            borderColor: '#ddd',*/}
                {/*            borderWidth: 2,*/}
                {/*            borderRadius: 10,*/}
                {/*            paddingHorizontal: 30,*/}
                {/*            paddingVertical: 10,*/}
                {/*        }}>*/}
                {/*        /!*<GoogleSVG height={24} width={24} />*!/*/}
                {/*    </TouchableOpacity>*/}
                {/*    <TouchableOpacity*/}
                {/*        onPress={() => {}}*/}
                {/*        style={{*/}
                {/*            borderColor: '#ddd',*/}
                {/*            borderWidth: 2,*/}
                {/*            borderRadius: 10,*/}
                {/*            paddingHorizontal: 30,*/}
                {/*            paddingVertical: 10,*/}
                {/*        }}>*/}
                {/*        /!*<FacebookSVG height={24} width={24} />*!/*/}
                {/*    </TouchableOpacity>*/}
                {/*    <TouchableOpacity*/}
                {/*        onPress={() => {}}*/}
                {/*        style={{*/}
                {/*            borderColor: '#ddd',*/}
                {/*            borderWidth: 2,*/}
                {/*            borderRadius: 10,*/}
                {/*            paddingHorizontal: 30,*/}
                {/*            paddingVertical: 10,*/}
                {/*        }}>*/}
                {/*        /!*<TwitterSVG height={24} width={24} />*!/*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}

                {/*<View*/}
                {/*    style={{*/}
                {/*        flexDirection: 'row',*/}
                {/*        justifyContent: 'center',*/}
                {/*        marginBottom: 30,*/}
                {/*    }}>*/}
                {/*    <Text>New to the app?</Text>*/}
                {/*    <TouchableOpacity onPress={() => navigation.navigate('Register')}>*/}
                {/*        <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen