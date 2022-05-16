import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, StyleSheet, Image} from 'react-native'
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import qs from "qs";
import * as SecureStore from 'expo-secure-store';
import AppStack from "../components/navigation/AppStack";



function LoginScreen ({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var data = qs.stringify({email, password});

    const handleSubmit = e => {
        e.preventDefault()
        console.log("next")
        console.log("email",email)
        console.log("password",password)
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://masterprooftoolbackend.herokuapp.com/login',
            //url: 'http://localhost:8080/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then((response) => {
                //console.log(response)
                console.log("access_token : response.data.access_token ", response.data.access_token )
                // SecureStore.setItemAsync('access_token', JSON.stringify(response.data.access_token))
                // console.log("access_token : JSON ", JSON.stringify(response.data.access_token))
                SecureStore.setItemAsync("access_token", response.data.access_token)
                // // SecureStorage.setItem('access_token', JSON.stringify(response.data.access_token))
                // console.log(qs.stringify( SecureStore.getItemAsync('access_token')))
                // console.log(SecureStorage.getItem('access_token'))
                navigation.navigate(AppStack)
                // console.log(signedin)
            })
            .catch(error => {
                console.log(error)
                console.log(error.stack)
                console.log("email" ,email)
                console.log("password" ,password)
                console.log("foutje")
            })
    }

    const styles = StyleSheet.create({
        inputField:{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius:10,
            flex:1,
            marginVertical:5,
            paddingLeft:10,
        },
        button:{
          marginTop:15,
        },
        icon: {
            marginTop:10,
            marginRight:3,
        }

    });

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor:'#ffffff'}}>
            <View style={{paddingHorizontal: 25}}>

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

                <View style={ {flexDirection: 'row'}}>
                    <MaterialIcons
                        name="alternate-email"
                        size={27}
                        color="#666"
                        style={styles.icon}
                    />


                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setEmail(text)}
                         value={email}
                        placeholder="Email"
                    />
                </View>

                <View style={ {flexDirection: 'row'}}>
                    <Ionicons
                                name="ios-lock-closed-outline"
                                size={27}
                                color="#666"
                                style={styles.icon}
                    />

                    <TextInput
                    style={styles.inputField}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Password"

                    />
                </View>
                {/*<InputField*/}
                {/*    label={'Email'}*/}
                {/*    icon={*/}
                {/*        <MaterialIcons*/}
                {/*            name="alternate-email"*/}
                {/*            size={20}*/}
                {/*            color="#666"*/}
                {/*            style={{marginRight: 5}}*/}
                {/*        />*/}
                {/*    }*/}
                {/*    // value={email}*/}
                {/*    onChange={(val) => setEmail(val)}*/}

                {/*    keyboardType="email-address"*/}
                {/*/>*/}

                {/*<InputField*/}
                {/*    label={'Password'}*/}
                {/*    icon={*/}
                {/*        <Ionicons*/}
                {/*            name="ios-lock-closed-outline"*/}
                {/*            size={20}*/}
                {/*            color="#666"*/}
                {/*            style={{marginRight: 5}}*/}
                {/*        />*/}
                {/*    }*/}
                {/*    inputType="password"*/}
                {/*    // value={password}*/}
                {/*    onChange={(val) => setPassword(val)}*/}
                {/*    // fieldButtonFunction={() => {}}*/}
                {/*/>*/}

                <CustomButton  label={"Login"} onPress={handleSubmit} />


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